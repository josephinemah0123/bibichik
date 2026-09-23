import {pageMetadata} from '@/lib/i18n';
import MenuBookViewer from '@/components/menu-book-viewer';
export const metadata=pageMetadata('en','Lunch Menu','/menu/lunch');
export default function Page(){return <main id="main"><MenuBookViewer menu="lunch" total={27}/></main>}
