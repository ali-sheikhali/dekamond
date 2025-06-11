'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            router.replace('/auth')
        }
    }, [router])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        </div>
    )
}
