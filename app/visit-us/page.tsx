import Image from 'next/image';
import {Hero,Locations} from '@/components/site';
import ContactForm from '@/components/contact-form';
export const metadata={title:'Visit Us'};
export default function Visit(){return <main id="main"><Hero title="Visit Us" subtitle="Come and experience the warmth of Nyonya flavours in a space made for everyone." image="visit-hero" alt="Sunlit BiBiChik dining interior with rattan chairs and Nyonya details"/><Locations/><section id="contact" className="contact-section container section"><Image className="contact-photo" src="/assets/contact.webp" alt="A ceramic flower vase and BiBiChik menu" width={770} height={964} sizes="(max-width: 800px) 100vw, 45vw"/><div><p className="eyebrow">Get in touch</p><h2>We’d Love to<br/>Hear From You</h2><p>Planning a gathering, celebration or simply have a question?</p><p>Drop us a message and we’ll get back to you soon.</p><ContactForm/></div></section></main>}
