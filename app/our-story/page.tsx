import Image from 'next/image';
import {Hero,Button} from '@/components/site';
import {Editorial} from '@/components/editorial';
import {copy,lines,pathFor,pageMetadata,type Locale} from '@/lib/i18n';
export const metadata=pageMetadata('en','Our Story','/our-story');
const heading=(text:string)=><>{lines(text).map((part,i)=><span key={part}>{i>0&&<br/>}{part}</span>)}</>;
export function StoryContent({locale}:{locale:Locale}){const c=copy[locale],s=c.story;return <main id="main"><Hero title={s.title} subtitle={s.subtitle} image="story-hero" alt={c.alt.story}/><Editorial label={s.beginning} title={heading(s.beginningTitle)} image="tiffin" alt={c.alt.tiffin}>{s.beginningBody.map(p=><p key={p}>{p}</p>)}</Editorial><section className="mint section"><div className="container heritage-layout"><div><p className="eyebrow">{s.heritage}</p><h2>{heading(s.heritageTitle)}</h2>{s.heritageBody.map(p=><p key={p}>{p}</p>)}</div><div className="heritage-cards">{s.cards.map(([name,body],i)=><article key={name}><Image src={`/assets/${['spice','tiles','classics'][i]}.webp`} alt={name} width={1254} height={1254} sizes="(max-width: 800px) 50vw, 33vw"/><h3>{name}</h3><p>{body}</p></article>)}</div></div></section><Editorial label={s.space} title={heading(s.spaceTitle)} image="space" alt={c.alt.space}>{s.spaceBody.map(p=><p key={p}>{p}</p>)}<Button href={pathFor(locale,'/menu')}>{c.common.explore}</Button></Editorial></main>}
export default function Story(){return <StoryContent locale="en"/>}
