"use client"

import { X, Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ConnectWallet from "./ConnectWallet"

const Header = () => {

    const path = usePathname()

    return (
        <header className="relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    {/* Logo */}
                    <div className="flex justify-start min-w-[120px] flex-1">
                        <Link href="/" className="flex items-center">
                            <div className="text-lg md:text-xl font-bold flex items-center">
                                <span className="text-white">Base Keyless MCP</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex space-x-10">
                        {/*   <Link href="/dashboard" className={` ${path === "/dashboard" ? "text-white" : "text-blue-100 hover:text-white "} font-medium`}>
                            Dashboard
                        </Link>*/}
                        <Link href="https://github.com/tamago-labs/base-keyless-mcp" target="_blank" className="text-blue-100 hover:text-white font-medium">
                            GitHub
                        </Link>
                    </nav>

                    <ConnectWallet

                    />
                </div>
            </div>

        </header>
    )
}

export default Header