import { useEffect, useState } from 'react';
import { DiscoveryLayout, DiscoveryNewsHeader } from '@/components/DiscoverySite';
import { NoticiaCard } from '@/components/NoticiaCard';
import { fetchPublishedNoticias } from '@/services/noticiasService';
import type { Noticia } from '@/types/noticia';
const NoticiasPage = () => {
 const [noticias, setNoticias] = useState<Noticia[]>([]);
 const [error, setError] = useState(false);
 useEffect(() => { let active=true; fetchPublishedNoticias().then(result=>{if(active){setNoticias(result.data);setError(!!result.error);}});return()=>{active=false;}; },[]);
 return <DiscoveryLayout><main><DiscoveryNewsHeader/>{noticias.length>0&&<section className="discovery-news-content" aria-label="Notícias publicadas"><div className="news-grid">{noticias.map(n=><NoticiaCard key={n.id} noticia={n}/>)}</div></section>}{error&&<div className="discovery-news-content" role="status">Não foi possível carregar as notícias. Tente novamente em instantes.</div>}</main></DiscoveryLayout>;
};
export default NoticiasPage;
