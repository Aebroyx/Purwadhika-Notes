'use server'
import { cookies } from 'next/headers'

export async function setCookies(data){
    cookies().set('userData', data[0].id)
}