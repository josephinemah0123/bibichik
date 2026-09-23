import {NextResponse,type NextRequest} from 'next/server';

export function proxy(request:NextRequest){
  const headers=new Headers(request.headers);
  headers.set('x-bibichik-locale',request.nextUrl.pathname==='/zh'||request.nextUrl.pathname.startsWith('/zh/')?'zh':'en');
  return NextResponse.next({request:{headers}});
}

export const config={matcher:['/((?!_next|favicon.ico|assets|menus).*)']};
