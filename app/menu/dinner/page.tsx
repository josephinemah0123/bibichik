import {pageMetadata} from '@/lib/i18n';
import MenuBookViewer from '@/components/menu-book-viewer';
export const metadata=pageMetadata('en','Dinner Menu','/menu/dinner');
export default function Page(){return <main id="main"><MenuBookViewer menu="dinner" total={22}/></main>}
