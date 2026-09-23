"use client";
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect,useState,type ReactNode} from 'react';
import {Menu} from 'lucide-react';
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription,SheetClose} from '@/components/ui/sheet';
const nav=[['Home','/'],['Our story','/our-story'],['Menu','/menu'],['Our flavours','/our-flavours']];
export function Header(){const path=usePathname();const[scrolled,setScrolled]=useState(false);useEffect(()=>{const f=()=>setScrolled(window.scrollY>20);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);return <header className={`site-header ${scrolled?'scrolled':''}`}><div className="header-inner"><Link className="brand" href="/" aria-label="BiBiChik home"><img src="/assets/logo.png" alt="BiBiChik — A Taste of Nyonya Heritage"/></Link><nav className="desktop-nav" aria-label="Main navigation">{nav.map(([n,h])=><Link href={h} key={h} aria-current={(h==='/'?path===h:path.startsWith(h))?'page':undefined}>{n}</Link>)}</nav><Button href="/visit-us" className="visit-cta">Visit Us</Button><Sheet><SheetTrigger className="mobile-toggle" aria-label="Open navigation"><Menu/></SheetTrigger><SheetContent className="mobile-sheet"><SheetTitle>BiBiChik</SheetTitle><SheetDescription>A Taste of Nyonya Heritage</SheetDescription><nav aria-label="Mobile navigation">{nav.map(([n,h])=><SheetClose asChild key={h}><Link href={h}>{n}</Link></SheetClose>)}<SheetClose asChild><Link href="/visit-us">Visit Us</Link></SheetClose></nav></SheetContent></Sheet></div></header>}
export function Button({href,children,secondary=false,className=''}:{href:string,children:ReactNode,secondary?:boolean,className?:string}){return <Link className={`button ${secondary?'secondary':''} ${className}`} href={href}>{children}</Link>}
export function Motif({className=''}:{className?:string}){return <img className={`motif ${className}`} src="/assets/emblem.png" alt="" aria-hidden="true"/>}
export function Hero({title,subtitle,description,image,alt,children}:{title:ReactNode,subtitle:string,description?:string,image:string,alt:string,children?:ReactNode}){return <section className="hero container"><div className="hero-copy"><h1>{title}</h1><p className="hero-subtitle">{subtitle}</p>{description&&<p className="hero-description">{description}</p>}{children}</div><div className="hero-photo"><Image src={`/assets/${image}.webp`} alt={alt} width={1600} height={1100} sizes="(max-width: 800px) 100vw, 50vw" priority/></div></section>}
const categories=[['Nyonya Classics','Rich, aromatic and full of character.','classics'],['Rice & Noodles','Comforting Malaysian favourites for any time of day.','noodles'],['Small Plates','A little bit of everything, best enjoyed together.','small-plates'],['Sweet Things','Classic Malaysian treats to finish the meal.','dessert'],['Drinks','Refreshing favourites inspired by local flavours.','drinks']];
export function MenuPreview(){return <section className="mint section"><div className="container"><div className="section-heading"><div><p className="eyebrow">A table full of favourites</p><h2>Our Menu</h2></div><Link className="text-link" href="/menu">View full menu <span>→</span></Link></div><div className="category-grid">{categories.map(([n,d,i])=><Link href="/menu" key={n} className="category"><Image src={`/assets/${i}.webp`} alt={n} width={1254} height={1254} sizes="(max-width: 800px) 50vw, 25vw"/><h3>{n}</h3><p>{d}</p></Link>)}</div></div></section>}
export type Location={name:string,address:string,phone:string,mapUrl:string,image:string,openingHours?:{day:string,sessions:string[]}[]};
export const locations:Location[]=[
  {name:'BiBiChik Sunway 163 Mall',address:'LG1-11 & 12, Sunway 163 Mall, 8, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',phone:'011-6214 7497',mapUrl:'https://www.google.com/maps/search/?api=1&query=BiBiChik%20Sunway%20163%20Mall',image:'/assets/location-one.webp',openingHours:[
    {day:'Monday',sessions:['10 am–10:30 pm']},
    {day:'Tuesday',sessions:['10 am–10:30 pm']},
    {day:'Wednesday',sessions:['10 am–10:30 pm']},
    {day:'Thursday',sessions:['10 am–10:30 pm']},
    {day:'Friday',sessions:['10 am–10:30 pm']},
    {day:'Saturday',sessions:['10 am–10:30 pm']},
    {day:'Sunday',sessions:['10 am–10:30 pm']}
  ]},
  {name:'BiBiChik SS2',address:'No. 17, Jalan SS 2/30, SS 2, 47300 Petaling Jaya, Selangor',phone:'011-7023 3354',mapUrl:'https://www.google.com/maps/search/?api=1&query=BiBiChik%20SS2%20Petaling%20Jaya',image:'/assets/location-two.webp',openingHours:[
    {day:'Monday',sessions:['11 am–3 pm','5:30–10:30 pm']},
    {day:'Tuesday',sessions:[]},
    {day:'Wednesday',sessions:['11 am–3 pm','5:30–10:30 pm']},
    {day:'Thursday',sessions:['11 am–3 pm','5:30–10:30 pm']},
    {day:'Friday',sessions:['11 am–3 pm','5:30–10:30 pm']},
    {day:'Saturday',sessions:['11 am–3 pm','5:30–10:30 pm']},
    {day:'Sunday',sessions:['11 am–3 pm','5:30–10:30 pm']}
  ]}
];
export function Locations({compact=false}:{compact?:boolean}){return <section className="blue section" id="locations"><div className="container"><div className="section-heading"><div><p className="eyebrow">Our locations</p><h2>Find Your Bibichik</h2></div><p>We can’t wait to welcome you.</p></div><div className="location-grid">{locations.map(l=><article className="location-card" key={l.name}><Image src={l.image} alt="BiBiChik dining interior" width={1570} height={710} sizes="(max-width: 800px) 100vw, 50vw"/><div><h3>{l.name}</h3><p>{l.address}</p><p><a href={`tel:+60${l.phone.replace(/\D/g,'').slice(1)}`}>{l.phone}</a></p>{l.openingHours&&<div className="location-hours"><h4>Opening hours</h4><dl>{l.openingHours.map(({day,sessions})=><div key={day}><dt>{day}</dt><dd>{sessions.length?sessions.map(time=><span key={time}>{time}</span>):'Closed'}</dd></div>)}</dl></div>}<a className="button secondary" href={l.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a></div></article>)}</div></div></section>}
export function Footer(){return <footer><div className="container footer-grid"><Link href="/" className="brand"><img src="/assets/logo.png" alt="BiBiChik — A Taste of Nyonya Heritage"/></Link><div><h4>Locations</h4><Link href="/visit-us#locations">Sunway 163 Mall</Link><br/><Link href="/visit-us#locations">SS2, Petaling Jaya</Link></div><div><h4>Opening hours</h4><p>Check branch listings for current hours</p></div><div><h4>Stay connected</h4><a href="https://www.instagram.com/bibichikmy/" target="_blank" rel="noopener noreferrer">Instagram</a><br/><a href="https://www.facebook.com/BibiChikSdnBhd/" target="_blank" rel="noopener noreferrer">Facebook</a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} BiBiChik. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div></div><Motif className="footer-motif"/></footer>}
