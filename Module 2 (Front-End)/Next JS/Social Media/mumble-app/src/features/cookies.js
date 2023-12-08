'use server'
import { cookies } from 'next/headers'

export async function setCookies(data){
    cookies().set('userData', data[0].id)
}

export async function getCookies() {
    const cookieStore = cookies()
    return cookieStore.get('userData')
}

export async function delCookies() {
    cookies().delete('userData')
}