import Image from 'next/image';
import {Hero,Button} from '@/components/site';
import {Editorial} from '@/components/editorial';
import {copy,lines,pathFor,pageMetadata,type Locale} from '@/lib/i18n';
export const metadata=pageMetadata('en','Our Flavours','/our-flavours');
const heading=(text:string)=><>{lines(text).map((part,i)=><span key={part}>{i>0&&<br/>}{part}</span>)}</>;
export function FlavoursContent({locale}:{locale:Locale}){const c=copy[locale],f=c.flavours;return <main id="main"><Hero title={f.title} subtitle={f.subtitle} image="flavour-hero" alt={c.alt.flavours}/><Editorial reverse label={f.table} title={heading(f.tableTitle)} image="tiles" alt={c.alt.tiles}>{f.tableBody.map(p=><p key={p}>{p}</p>)}</Editorial><section className="blue section"><div className="container"><p className="eyebrow">{f.define}</p><div className="flavour-grid">{f.cards.map(([name,body],i)=><article key={name}><Image src={`/assets/${['spice','tang','sweet','fresh'][i]}.webp`} alt={name} width={1254} height={1254} sizes="(max-width: 800px) 50vw, 25vw"/><h3>{name}</h3><p>{body}</p></article>)}</div></div></section><Editorial reverse label={f.more} title={heading(f.moreTitle)} image="feast" alt={c.alt.feast}>{f.moreBody.map(p=><p key={p}>{p}</p>)}<Button href={pathFor(locale,'/menu')}>{c.common.explore}</Button></Editorial></main>}
export default function Flavours(){return <FlavoursContent locale="en"/>}
