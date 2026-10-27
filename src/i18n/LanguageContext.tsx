import { Children, cloneElement, createContext, isValidElement, useContext, useEffect, useState, type ReactNode, type ReactElement } from 'react';
import translations from './translations.json';
export type Language = 'pt' | 'es' | 'en';
const locale = { pt: 'pt-BR', es: 'es', en: 'en' };
const dictionary = translations as Record<string, string[]>;
export function translate(text: string, language: Language): string {
  if (language === 'pt' || !text.trim()) return text;
  const key = text.replace(/\s+/g, ' ').trim();
  const translated = dictionary[key]?.[language === 'es' ? 0 : 1];
  if (translated === undefined) return text;
  return `${text.match(/^\s*/)?.[0] ?? ''}${translated}${text.match(/\s*$/)?.[0] ?? ''}`;
}
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: 'pt', setLanguage: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem('ycorps-language'); return saved === 'es' || saved === 'en' ? saved : 'pt'; } catch { return 'pt'; }
  });
  useEffect(() => {
    document.documentElement.lang = locale[language];
    document.title = translate('Ycorps | Anticorpos IgY customizados', language);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', translate('Anticorpos IgY customizados, do antígeno à purificação. Solicite uma análise gratuita do seu antígeno pela equipe Ycorps.', language));
    try { localStorage.setItem('ycorps-language', language); } catch { /* Language changes still work if storage is unavailable. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
// Translate React text and accessible labels without changing form values, links, or handlers.
function localize(node: ReactNode, language: Language): ReactNode {
  return Children.map(node, child => {
    if (typeof child === 'string') return translate(child, language);
    if (!isValidElement(child)) return child;
    const element = child as ReactElement<Record<string, unknown>>;
    if (element.props['data-no-translate']) return element;
    const props: Record<string, unknown> = {};
    for (const key of ['alt', 'title', 'aria-label', 'placeholder']) {
      if (typeof element.props[key] === 'string') props[key] = translate(element.props[key] as string, language);
    }
    return cloneElement(element, props, localize(element.props.children as ReactNode, language));
  });
}
export function Localize({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  return <>{localize(children, language)}</>;
}
