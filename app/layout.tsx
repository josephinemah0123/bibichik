import type { Metadata } from 'next';
import {headers} from 'next/headers';
import './globals.css';
import {Header,Footer} from '@/components/site';
import {LanguageChrome} from '@/components/language-chrome';
export const metadata:Metadata={title:{default:'BiBiChik — A Taste of Nyonya Heritage',template:'%s | BiBiChik'},description:'Discover the warmth, colour and character of Malaysian Nyonya cuisine. Explore our story, flavours and original lunch and dinner menus.',icons:{icon:'/favicon.png'}};
export default async function Layout({children}:{children:React.ReactNode}){const locale=(await headers()).get('x-bibichik-locale')==='zh'?'zh':'en';return <html lang={locale==='zh'?'zh-CN':'en'}><body><LanguageChrome/><Header/>{children}<Footer/></body></html>}
