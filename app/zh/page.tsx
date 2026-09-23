import {HomeContent} from '@/app/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('zh',copy.zh.home.title,'/');
export default function Page(){return <HomeContent locale="zh"/>}
