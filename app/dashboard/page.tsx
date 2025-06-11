'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./Dashborad.module.scss"
export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            router.replace('/auth')
        }
    }, [router])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the Dashboard</h1>
        </div>
    )
}
