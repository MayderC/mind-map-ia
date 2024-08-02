import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';


const protecteds = ['/api/user', '/api/summary', '/api/maps']
const viewsProtected = ['/dashboard']

export async function middleware(request: NextRequest) {
  const token = cookies().get('accessToken')?.value; 
  let isTokenValid = null
  const isProtected = protecteds.some((view) => request.url.includes(view))
  const isViewProtected = viewsProtected.some((view) => request.url.includes(view))

  if (token && (isProtected || isViewProtected)) {
    try{
      isTokenValid = await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'AVOID_DEFAULT_XX'))
    }catch(e){
      isTokenValid = null
    }
  }
    
  if ((viewsProtected.some((view) => request.url.includes(view)) && (!token || isTokenValid===null))) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (isProtected && isTokenValid===null ) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.next()
}
