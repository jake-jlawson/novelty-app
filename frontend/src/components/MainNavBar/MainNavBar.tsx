/**
 * Main NavBar Component
 * This component lies at the top of the main layout underneath the logo and tagline. It:
 * - Implements a TikTok-style navigation bar with various tabs.
 * - Allows you to click to move between tabs on the main page.
 * - Reflects the current tab you are on.
 */

"use client"; // make client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Style Imports
import styles from "@/components/MainNavBar/MainNavBar.module.css";



export default function MainNavBar() {
    
    // Get pathname and get the last segment
    const pathname = usePathname();
    const pathSegments = pathname.split('/main/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    

    return (
        <nav className="w-100 flex items-center justify-center flex-row space-x-4" role="navigation" aria-label="Main navigation">
            
            <Link href="/main/timeline" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <span className={clsx(
                    `${styles.tab} hover:opacity-80 transition-opacity`,
                    lastSegment === "timeline" ? styles.active : ""
                )}>Timeline</span>
            </Link>

            <div aria-hidden="true">|</div>

            <Link href="/main/generation" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <span className={clsx(
                    `${styles.tab} hover:opacity-80 transition-opacity`,
                    lastSegment === "generation" ? styles.active : ""
                )}>Generate</span>
            </Link>

        </nav>
    )
}