"use client";
import {useState,type FormEvent} from 'react';
import {business} from '@/lib/business';
import {copy,type Locale} from '@/lib/i18n';
export default function ContactForm({locale='en'}:{locale?:Locale}){const[status,setStatus]=useState(''),c=copy[locale].visit;function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!business.contactEmail){setStatus(c.notSent);return}const d=new FormData(e.currentTarget);const subject=encodeURIComponent('BiBiChik enquiry from '+d.get('name'));const body=encodeURIComponent(`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}

${d.get('message')}`);window.location.href=`mailto:${business.contactEmail}?subject=${subject}&body=${body}`;setStatus(c.emailOpen)}return <form onSubmit={submit} className="contact-form"><div className="form-fields"><label>{c.name}<input name="name" autoComplete="name" required maxLength={120}/></label><label>{c.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label><label>{c.email}<input name="email" type="email" autoComplete="email" required maxLength={180}/></label></div><label>{c.message}<textarea name="message" rows={5} required maxLength={4000}/></label>{!business.contactEmail&&<p className="form-note" id="contact-note">{c.unavailable}</p>}<button className="button" disabled={!business.contactEmail} aria-describedby={!business.contactEmail?'contact-note':undefined}>{c.send}</button><p role="status">{status}</p></form>}
