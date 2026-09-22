import type { Metadata } from 'next';
import './globals.css';
import {Header,Footer} from '@/components/site';
export const metadata:Metadata={title:{default:'BiBiChik — A Taste of Nyonya Heritage',template:'%s | BiBiChik'},description:'Discover the warmth, colour and character of Malaysian Nyonya cuisine. Explore our story, flavours and original lunch and dinner menus.',icons:{icon:'/favicon.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}