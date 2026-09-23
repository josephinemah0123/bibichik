import Image from 'next/image';
import {Hero,Locations} from '@/components/site';
import ContactForm from '@/components/contact-form';
import {copy,lines,pageMetadata,type Locale} from '@/lib/i18n';
export const metadata=pageMetadata('en','Visit Us','/visit-us');
export function VisitContent({locale}:{locale:Locale}){const c=copy[locale],v=c.visit;return <main id="main"><Hero title={v.title} subtitle={v.subtitle} image="visit-hero" alt={c.alt.visit}/><Locations locale={locale}/><section id="contact" className="contact-section container section"><Image className="contact-photo" src="/assets/contact.webp" alt={c.alt.contact} width={770} height={964} sizes="(max-width: 800px) 100vw, 45vw"/><div><p className="eyebrow">{v.touch}</p><h2>{lines(v.touchTitle).map((part,i)=><span key={part}>{i>0&&<br/>}{part}</span>)}</h2>{v.touchBody.map(p=><p key={p}>{p}</p>)}<ContactForm locale={locale}/></div></section></main>}
export default function Visit(){return <VisitContent locale="en"/>}
