import SideBar from '@/components/SideBar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="root">
            <SideBar />
            <div className="root-container">
                <div className="wrapper">{children}</div>
            </div>
        </main>
    )
}
