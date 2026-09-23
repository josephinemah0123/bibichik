import MenuBookViewer from '@/components/menu-book-viewer';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('zh',copy.zh.menu.dinner,'/menu/dinner');
export default function Page(){return <main id="main"><MenuBookViewer menu="dinner" total={22} locale="zh"/></main>}
