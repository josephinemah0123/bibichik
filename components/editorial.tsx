import type {ReactNode} from 'react';
import Image from 'next/image';
export function Editorial({label,title,image,alt,children,reverse=false}:{label:string,title:ReactNode,image:string,alt:string,children:ReactNode,reverse?:boolean}){return <section className={`editorial container section ${reverse?'reverse':''}`}><div className="editorial-photo"><Image src={`/assets/${image}.webp`} alt={alt} width={1570} height={1050} sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="editorial-copy"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</div></section>}
