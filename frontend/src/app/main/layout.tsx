/**
 * Main Layout Component
 * 
 * This file defines the main layout for novelty.ai app, including the home screen and main generation/timeline screen.
 * - Implements swipe navigation.
 * - Controls current screen.
 */

// Imports
import type { Metadata } from "next";
import Image from "next/image";
// Component Imports
import MainNavBar from "@/components/MainNavBar/MainNavBar";
import IconButton from "@/components/IconButton/IconButton";
import ActiveBoard from "@/components/ActiveBoard/ActiveBoard";
import BackgroundArt from "@/components/BackgroundArt/BackgroundArt";
// Icon Imports
import { BsStars } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
// Style Imports
import styles from "@/app/main.module.css";




export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-full w-full">
            
            <header className="w-full pt-10 flex items-center justify-center flex-col">
                {/* novelty.ai Logo */}
                <div className="w-[70%] mb-2">
                    <Image 
                        src="/noveltyai.png" 
                        alt="Novelty AI Logo" 
                        width={995}
                        height={205}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* novelty.ai Tagline / Icon Buttons */}
                <div className="w-full px-[10%] flex items-center justify-center flex-row mb-8 gap-[4px]">
                    <IconButton 
                        icon={<TbSettings />} 
                        size="h-5" 
                        href="/" 
                    />
                    <p className={`${styles.tagline} flex-1 overflow-hidden`}>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                    <p className={`${styles.tagline}`}>Break the Routine. Feel ALIVE.</p>
                    <p className={`${styles.tagline} flex-1 overflow-hidden`}>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                    <IconButton 
                        icon={<BsStars />} 
                        size="h-5" 
                        href="/" 
                    />
                </div>

                {/* Main App Nav Bar */}
                <div className="w-full flex items-center justify-center">
                    <MainNavBar />
                </div>
            </header>


            {/* Main App Content */}
            <main className="flex-1 px-6 py-4">
                
                <BackgroundArt style="grey" />

                {/* Content-safe area */}
                <div className="rounded-b-[28px] h-full">
                    <ActiveBoard />
                    {children}
                </div>
            </main>

        </div>
    )
}