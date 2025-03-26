"use client"

import { useRouter } from "next/router"

export default function SlugPgae() {
    const router = useRouter()
   return <p>Post: {router.query.slug}</p>
}