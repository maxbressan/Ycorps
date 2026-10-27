import { Localize, translate, useLanguage, type Language } from '@/i18n/LanguageContext';
import { useEffect, useState, type CSSProperties, type ReactNode, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './discovery.css';

const asset = (name: string | number) => `/reference/${typeof name === 'number' ? `image-${name}.png` : `${name}.png`}`;
const whatsapp = 'https://wa.me/5549988417900';
const analysis = '/#contact';
function At({ x, y, w, className = '', children }: { x: number; y: number; w?: number; className?: string; children: ReactNode }) {
  return <div className={`placed ${className}`} style={{ left: x, top: y, width: w }}>{children}</div>;
}
export function DiscoveryLayout({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [avoidFooter, setAvoidFooter] = useState(false);
  useEffect(() => {
    const update = () => { const footer=document.querySelector('.discovery-footer'); setAvoidFooter(!!footer && footer.getBoundingClientRect().top < window.innerHeight); };
    update(); window.addEventListener('scroll',update,{passive:true}); return()=>window.removeEventListener('scroll',update);
  }, []);
  const location = useLocation();
  useEffect(() => { requestAnimationFrame(() => {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' }); else window.scrollTo({ top: 0, behavior: 'instant' });
  }); }, [location.pathname, location.hash]);
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => { const resize = () => setWidth(window.innerWidth); window.addEventListener('resize', resize); return () => window.removeEventListener('resize', resize); }, []);
  return <Localize><div className="discovery" data-language={language} style={{ '--design-scale': width / 1440 } as CSSProperties}>{children}<a className={`whatsapp-fixed${avoidFooter ? " avoid-footer" : ""}`} href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Falar pelo WhatsApp</a></div></Localize>;
}
function WhatsAppIcon() { return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M27 15.5a11.5 11.5 0 0 1-17 10L4 27l1.7-5.8A11.5 11.5 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2"/><path d="M11 9c-1 0-2 2-1 4 2 4 5 7 9 8 2 0 4-2 3-3l-3-2-2 2c-2-1-4-3-5-5l1-1-2-3Z" fill="currentColor"/></svg>; }
export function DiscoveryHeader() {
  return <Localize><header className="discovery-header"><Link to="/" aria-label="Ycorps — início"><img src={asset(34)} alt="Ycorps — Soluções em diagnóstico" /></Link><nav aria-label="Navegação principal"><Link to="/">Início</Link><Link to="/noticias">Notícias</Link></nav><a className="button" href={analysis}>Solicitar análise gratuita</a></header></Localize>;
}
export function Languages() {
 const { language, setLanguage } = useLanguage();
 const options: { code: Language; name: string; image: string }[] = [
  { code: 'pt', name: 'Português', image: asset(38) },
  { code: 'es', name: 'Español', image: asset('flag-spain') },
  { code: 'en', name: 'English', image: '/reference/flag-us.svg' },
 ];
 return <div className="languages" role="group" aria-label={language === 'pt' ? 'Selecionar idioma' : language === 'es' ? 'Seleccionar idioma' : 'Select language'}>
  {options.map(option => <button type="button" key={option.code} onClick={() => setLanguage(option.code)} aria-label={option.name} title={option.name} aria-pressed={language === option.code}><img src={option.image} alt=""/></button>)}
 </div>;
}
function Label({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
const features = [
 ['Alta especificidade', 'O desenho parte das características do antígeno e do objetivo experimental.', 'target'],
 ['Menor background', 'Uma alternativa para contextos em que interações associadas a anticorpos de mamíferos são relevantes.', 'antibody'],
 ['Produção escalável', 'A coleta de ovos abre uma rota recorrente de material para o projeto.', 'growth'],
 ['Projeto flexível', 'Imunização, coleta e processamento são orientados pelos dados de titulação.', 'settings'],
];
function FeatureIcon({ type }: { type: string }) {
 return <img src={asset(`icon-${type}`)} alt="" className="feature-icon"/>;
}

const steps = [ ['Planejamento do antígeno', 'Revisão do alvo e estratégia de imunização.'], ['Imunização das galinhas', 'Protocolo conduzido a partir da estratégia definida.'], ['Monitoramento por ELISA', 'Leituras sequenciais ao longo do projeto.'], ['Purificação', 'Rota escolhida conforme nível de enriquecimento necessário.'], ['Entrega', 'Produto, dados de titulação e relatório técnico.'] ];
const packages = [ ['IgY total em tampão','Separação das frações proteicas','75–85%','ELISA'], ['Fração total mais pura','Cromatografia de afinidade e SEC','90–95%','WB, IHQ e ELISA'], ['Enriquecimento específico','Imunoafinidade','>95%','WB, IHQ, FACS e ELISA'] ];
const team = [
 ['claudia','Dra. Claudia Pies Biffi','Diretora Executiva','Doutora em Ciência Animal e com MBA em Gestão do Agronegócio, com carreira como docente e responsável técnica em produção avícola. Administradora financeira e jurídica da Ycorps, representa formalmente a empresa e gerencia nossas parcerias.'],
 ['camila','M.Sc. Camila Martins Conti','Diretora de Operações','Mestre em Ciência Animal e pesquisadora. É a primeira pessoa com quem você fala: responde pelo comercial, pelo relacionamento com o cliente e pela comunicação da Ycorps.'],
 ['leonardo','M.Sc. Leonardo Antonio Fernandes','Diretor Técnico','Mestre em Bioquímica e doutorando pela UDESC. Responsável pela purificação, controle de qualidade dos lotes e toda documentação técnica que acompanha cada entrega.'],
 ['sandra','Dra. Sandra Davi Traverso','Consultora Técnica','Doutora em Ciência Animal, professora titular da UDESC e patologista veterinária. Valida as aplicações dos anticorpos em histopatologia e conecta a Ycorps à rede de laboratórios e órgãos de defesa sanitária.'],
];
export function DiscoveryHome() {
 const { language } = useLanguage();
 return <DiscoveryLayout><main>
  <section className="design-panel page-0 hero-panel" id="hero" aria-labelledby="hero-title">
   <img className="corner-decoration" src={asset(31)} alt=""/><DiscoveryHeader/><Languages/>
   <At x={92.9} y={168} w={590} className="hero-copy"><h1 id="hero-title">{language === 'pt' ? <>Transforme seu alvo{' '}<br/>em um <em>anticorpo IgY</em>{' '}<br/>customizado, com{' '}<br/>estratégia técnica do{' '}<br/>antígeno à purificação</> : language === 'es' ? <>Transforme su diana en un <em>anticuerpo IgY personalizado</em>, con estrategia técnica del antígeno a la purificación</> : <>Turn your target into a <em>custom IgY antibody</em>, with a technical strategy from antigen to purification</>}</h1></At>
   <At x={94.5} y={515.4} w={556} className="hero-description"><p>{language === 'pt' ? 'A ' : ''}<strong>Ycorps</strong> desenvolve anticorpos contra proteínas, peptídeos, células, haptenos e outros alvos, <strong>integrando desenho antigênico, acoplamento, imunização, monitoramento por ELISA, purificação e entrega técnica completa.</strong></p></At>
   <At x={719} y={150} w={673} className="hero-photo"><img src={asset(564)} alt="Anticorpo em tubo de laboratório, segurado por uma mão com luva azul"/></At>
   <At x={657} y={214} w={261} className="hero-note"><strong>PONTO DE PARTIDA</strong><p>Seu antígeno, avaliado com contexto.</p><p>Estratégia antes da bancada.</p></At>
   <At x={93} y={639} w={560} className="hero-actions"><a href="#contact" className="button">Solicitar análise gratuita do meu antígeno</a><a href="#packages" className="button gold">Comparar pacotes de produção</a></At>
   <At x={93.7} y={715.2} w={600} className="hero-caption"><p>Envie a sequência, proteína, peptídeo ou descrição do alvo para avaliarmos a melhor estratégia antes do início.</p></At>
  </section>
  <section className="design-panel page-1 technology-panel" id="technology" aria-labelledby="technology-title">
   <div className="egg-art"><img className="eggs-composition" src={asset("eggs-art")} alt="Três ovos sobre o símbolo de um anticorpo: coleta recorrente de IgY a partir da gema"/></div>
   <At x={201.7} y={737.8} w={400} className="egg-caption">{language === 'en' ? <><strong>RECURRING</strong> COLLECTION FROM EGG <strong>YOLK</strong></> : <>COLETA <strong>RECORRENTE</strong> A PARTIR DA <strong>GEMA</strong></>}</At>
   <At x={744} y={93} w={625} className="technology-heading"><Label>POR QUE IgY?</Label><h2 id="technology-title">Uma plataforma mais{' '}<br/><em>inteligente</em> para{' '}<br/>anticorpos policlonais</h2></At>
   <At x={744} y={295} w={620} className="technology-description"><p>{language === 'en' ? '' : 'A '}<strong>IgY</strong> é naturalmente transferida para a gema. Isso permite coleta recorrente e uma rota de produção que <strong>reduz a dependência de modelos baseados em soro de mamíferos,</strong> mantendo o projeto conectado ao seu alvo e à sua aplicação.</p></At>
   <At x={740} y={374} w={620} className="features-grid">{features.map(([title, text, icon]) => <article className="feature" key={title}><FeatureIcon type={icon}/><h3>{title}</h3><p>{text}</p></article>)}</At>
  </section>
  <section className="design-panel page-2 process-panel dark-panel" id="process" aria-labelledby="process-title">
   <At x={115} y={44} w={350}><Label>COMO FUNCIONA</Label></At>
   <At x={113.5} y={88.4} w={560}><h2 id="process-title">O dado de ELISA{' '}<br/>guia a próxima decisão</h2></At>
   <At x={705.3} y={120.8} w={630} className="process-description"><p>Monitoramos a titulação ao longo do projeto e esses dados orientam o momento mais adequado de coleta e processamento dos anticorpos.</p></At>
   <At x={114} y={229} w={1219} className="process-photo"><img src={asset(614)} alt="Preparação de gema em recipiente sobre balança de laboratório" loading="lazy"/></At>
   <At x={113.5} y={587} w={1216} className="process-steps"><ol>{steps.map(([title,text],i)=><li key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></At>
  </section>
  <section className="design-panel page-3 service-panel" id="service" aria-labelledby="service-title">
   <At x={84.3} y={96.2} w={650} className="service-heading"><Label>SERVIÇO IgY</Label><h2 id="service-title">Um ponto de entrada{' '}<br/>técnico para decisões{' '}<br/>mais seguras</h2></At>
   <At x={85.1} y={314.7} w={602} className="service-copy"><p>O serviço padrão contempla aproximadamente <strong>60 dias de imunização,</strong> cerca de 15 dias de coleta de ovos e possibilidade de escalonamento.</p><p>A <strong>estratégia</strong> acompanha o <strong>comportamento do antígeno</strong> e os <strong>resultados de titulação</strong> para equilibrar tempo, qualidade, título e rendimento.</p></At>
   <At x={84} y={470} w={680} className="service-checks">{[['Revisão gratuita do antígeno e do protocolo','Antes de iniciar, avaliamos o contexto técnico do seu projeto.'],['Estratégia ajustável','O cronograma pode seguir, ser ajustado ou ser encerrado conforme os dados.'],['Possibilidade de escalonamento','Planeje novos ciclos conforme sua necessidade.']].map(([title,text])=><div key={title}><span aria-hidden="true">✓</span><h3>{title}</h3><p>{text}</p></div>)}</At>
   <At x={762} y={169} w={545} className="service-photo"><img src={asset(642)} alt="Produção de anticorpos IgY com ovos, pipeta e amostras em laboratório" loading="lazy"/></At>
   <At x={1064} y={483} w={284} className="service-note"><strong>Decisão baseada em titulação</strong><p>O projeto não segue no{' '}<br/>automático: cada etapa{' '}<br/>responde aos dados.</p></At>
  </section>
  <section className="design-panel page-4 packages-panel dark-panel" id="packages" aria-labelledby="packages-title">
   <At x={109} y={54.6} w={800}><Label>PACOTES DE PRODUÇÃO</Label><h2 id="packages-title">Escolha o nível de <strong>purificação</strong>{' '}<br/>que <strong>sua aplicação pede</strong></h2></At>
   <At x={108} y={238} w={1228} className="packages-grid">{packages.map(([title,procedure,purity,application],i)=><article className={`package package-${i+1}`} key={title}><span>PACOTE {i+1}</span><h3>{title}</h3><dl><dt>Procedimento</dt><dd>{procedure}</dd><dt>Pureza</dt><dd>{purity}</dd><dt>{i===2?'Aplicações':'Aplicação'}</dt><dd>{application}</dd></dl></article>)}</At>
   <At x={108} y={631} w={1250} className="included"><h3>TODOS OS PACOTES INCLUEM:</h3><p>Imunização de uma galinha, amostra pré-imune, monitoramento por ELISA, dados de titulação,{' '}<br/>relatório técnico completo e recomendação de reforço, escalonamento ou encerramento.</p></At>
  </section>
  <section className="design-panel page-5 deliverables-panel" id="deliverables" aria-labelledby="deliverables-title">
   <At x={59.4} y={68} w={1000}><Label>ENTREGÁVEIS</Label><h2 id="deliverables-title"><strong>Clareza operacional</strong>{' '}<br/>em cada entrega</h2></At>
   <At x={62.8} y={259.8} w={1100} className="deliverables-description"><p>O recebimento é estruturado para que sua equipe saiba o que foi acompanhado, processado e recomendado.</p></At>
   <At x={57} y={309} w={1261} className="table-wrap"><table className="deliverables-table"><thead><tr>{['ENTREGÁVEL','PACOTE 1','PACOTE 2','PACOTE 3'].map(x=><th key={x} scope="col">{x}</th>)}</tr></thead><tbody>{[['Relatório completo','Sim','Sim','Sim'],['Dados de ELISA','Sim','Sim','Sim'],['IgY pré-imune','Sim','Sim','Sim'],['IgY total purificada','Sim','—','—'],['Anticorpo purificado por afinidade','—','Sim','Sim']].map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table></At>
  </section>
  <section className="design-panel page-6 antigens-panel" id="antigens" aria-labelledby="antigens-title">
   <At x={73.5} y={76.6} w={470}><Label>ANTÍGENOS ACEITOS</Label></At>
   <At x={68.2} y={100.6} w={460}><h2 id="antigens-title">Começamos{' '}<br/>pelo formato do{' '}<br/>seu alvo</h2></At>
   <At x={71.8} y={298} w={457} className="antigens-description"><p>O <strong>envio,</strong> a <strong>estabilidade,</strong> a necessidade de <strong>conjugação a carreador</strong> e o <strong>alinhamento prévio</strong> são considerados antes da imunização.</p></At>
   <At x={568} y={77} w={765} className="table-wrap antigen-table-wrap"><table className="antigen-table"><thead><tr><th scope="col">FORMATO</th><th scope="col">QUANTIDADE RECOMENDADA</th></tr></thead><tbody>{[['Proteína purificada','1,0 – 2,0 mg'],['Expressão de proteína','Sequência do alvo'],['Peptídeos','2 - 10 mg'],['Células',<>10<sup>6</sup> - 10<sup>7</sup> por imunização</>],['Haptenos','Avaliado individualmente']].map(([label,value])=><tr key={String(label)}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></At>
   <At x={71} y={555} w={520} className="planning-note"><img className="planning-icon" src={asset("icon-planning")} alt=""/><h3>Nota de planejamento</h3><p>A purificação por afinidade pode exigir material adicional. <strong>Na análise gratuita, indicamos o que faz sentido para a estratégia proposta.</strong></p></At>
  </section>
  <section className="design-panel page-7 complementary-panel dark-panel" id="complementary" aria-labelledby="complementary-title"><h2 id="complementary-title">SERVIÇOS COMPLEMENTARES:</h2><div className="service-pills"><span>DESENHO DE ANTÍGENO</span><span>ANÁLISE DE SEQUÊNCIA</span><span>EXPRESSÃO EM <i>E. coli</i></span><span>CONJUGAÇÃO A CARREADORES</span><span>PUREZA E ESPECIFICIDADE</span></div></section>
  <section className="design-panel page-8 team-panel" id="team" aria-labelledby="team-title">
   <At x={65.9} y={48.2} w={600}><Label>CONHEÇA A EQUIPE DA YCORPS</Label></At>
   <At x={68.1} y={84.7} w={900}><h2 id="team-title"><em>Da granja</em> à bancada</h2></At>
   <At x={68.1} y={167.8} w={1260} className="team-intro"><p>A força da Ycorps está na sinergia de uma equipe que une expertise em avicultura, bioquímica molecular e diagnóstico veterinário. Graduados em Medicina Veterinária pela Universidade do Estado de Santa Catarina (UDESC), nossos fundadores e diretores compartilham a missão de impulsionar a <strong>ciência aplicada.</strong></p></At>
   <At x={68} y={251} w={1304} className="team-grid">{team.map(([photo,name,role,bio])=><article key={name}><img src={asset(photo)} alt={name} loading="lazy"/><h3>{name}</h3><h4>{role}</h4><p>{bio}</p></article>)}</At>
  </section>
  <section className="design-panel page-9 recognition-panel" id="recognition" aria-labelledby="recognition-title">
   <At x={68.2} y={86.3} w={620}><h2 id="recognition-title"><em>Reconhecimento</em>{' '}<br/>e Inovação</h2></At>
   <At x={68.2} y={237.9} w={557} className="recognition-intro"><p>Desde sua <strong>fundação em 2025,</strong> a Ycorps é continuamente validada por prêmios e parcerias que fortalecem a inovação catarinense.</p></At>
   <At x={68} y={341} w={614} className="award award-orion"><img src={asset("award-orion")} alt="Equipe premiada no Orion Awards 2K25" loading="lazy"/><h3>Orion Awards 2K25</h3><p>Startup Revelação | Destaque Inovação UDESC</p></At>
   <At x={720} y={102} w={614} className="award award-nascer"><img src={asset("award-nascer")} alt="Premiação do Programa Nascer, com cheque de 220 mil reais" loading="lazy"/><h3>Programa Nascer 5ª Edição</h3><p>1º lugar{' '}<br/>Subvenção Econômica | FAPESC, SEBRAE e SCTI</p></At>
   <At x={720} y={605.6} w={650} className="award award-centelha"><h3>Programa Centelha 2026</h3><p>Subvenção Econômica | FINEP, CNPq, FAPESC e SCTI</p></At>
  </section>
  <section className="design-panel page-10 contact-panel" id="contact" aria-labelledby="contact-title">
   <img className="contact-decoration" src={asset("contact-corner")} alt=""/>
   <At x={51} y={54.8} w={660}><Label>ANÁLISE GRATUITA</Label></At>
   <At x={43.4} y={99} w={700}><h2 id="contact-title">Conte-nos sobre o seu alvo</h2></At>
   <At x={45.6} y={157.8} w={660} className="contact-subtitle"><p><strong>Compartilhe o formato do antígeno</strong> e o que você pretende fazer com o <strong>anticorpo</strong></p></At>
   <At x={51.8} y={279.1} w={470} className="contact-description"><p>A <strong>equipe Ycorps</strong> avaliará o contexto e retornará com a <strong>orientação técnica adequada.</strong></p></At>
   <At x={755} y={29} w={620} className="analysis-form-position"><AnalysisForm/></At>
   <DiscoveryFooter/>
  </section>
 </main></DiscoveryLayout>;
}
function AnalysisForm() {
 const { language } = useLanguage();
 const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const text = translate('Olá! Gostaria de solicitar uma análise gratuita do meu antígeno.', language) + '\n\n' + Array.from(data.entries()).map(([key,value])=>`*${translate(key, language)}:* ${translate(String(value).trim() || 'Não informado', language)}`).join('\n');
  window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
 };
 return <Localize><form className="analysis-form" onSubmit={submit}>
  <div className="form-pair"><label>NOME<input name="Nome" autoComplete="name" required/></label><label>INSTITUIÇÃO/EMPRESA<input name="Instituição/empresa" autoComplete="organization" required/></label></div>
  <div className="form-pair"><label>E-MAIL PROFISSIONAL<input type="email" name="E-mail profissional" autoComplete="email" required/></label><label>TIPO DE ALVO<select name="Tipo de alvo" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{['Proteína purificada','Expressão de proteína','Peptídeos','Células','Haptenos','Outro'].map(x=><option key={x} value={x}>{x}</option>)}</select></label></div>
  <div className="form-pair"><label>APLICAÇÃO DESEJADA<select name="Aplicação desejada" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{['ELISA','WB','IHQ','FACS','Outra / a definir'].map(x=><option key={x} value={x}>{x}</option>)}</select></label><label>PRAZO DESEJADO<input name="Prazo desejado"/></label></div>
  <label>MATERIAL DISPONÍVEL E CONCENTRAÇÃO APROXIMADA<textarea name="Material disponível e concentração aproximada" rows={3}/></label>
  <label>NECESSIDADE DE CONJUGAÇÃO, PURIFICAÇÃO POR AFINIDADE OU MARCAÇÃO<textarea name="Conjugação, afinidade ou marcação" rows={3}/></label>
  <label>OBSERVAÇÕES TÉCNICAS<textarea name="Observações técnicas" rows={3}/></label>
  <button type="submit" className="button">Enviar meu antígeno para avaliação</button><p>Ao enviar, você inicia uma análise técnica do seu antígeno pela equipe Ycorps.</p>
 </form></Localize>;
}
export function DiscoveryFooter() { return <Localize><footer className="discovery-footer"><div><Link to="/" aria-label="Ycorps — início"><img src={asset(183)} alt="Ycorps"/></Link><p>IgY Discovery para projetos que pedem uma rota técnica clara, do antígeno à purificação.</p></div><nav aria-label="Tecnologia"><a href="/#technology">Tecnologia IgY</a><a href="/#packages">Pacotes</a></nav><nav aria-label="Processo"><a href="/#process">Processo</a><a href="/faq">FAQ</a></nav><a className="button outline" href={analysis}>Solicitar análise gratuita</a></footer></Localize>; }
export function DiscoveryNewsHeader() { return <Localize><section className="design-panel page-11 news-hero"><img className="corner-decoration" src={asset(31)} alt=""/><DiscoveryHeader/><Languages/><At x={92.9} y={167.9} w={900}><h1>Notícias e <em>novidades</em></h1></At><At x={92.9} y={270.2} w={900}><p>Acompanhe lançamentos, conquistas e atualizações da Ycorps.</p></At></section></Localize>; }
