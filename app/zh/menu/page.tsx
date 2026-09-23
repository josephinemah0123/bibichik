import {MenuContent} from '@/app/menu/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('zh',copy.zh.menu.title,'/menu');
export default function Page(){return <MenuContent locale="zh"/>}
