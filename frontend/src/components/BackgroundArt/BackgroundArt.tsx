/**
 * BackgroundArt Component
 * This component displays the background art for the app.
 * @props {string} style - Controls two styles of background art
 */

// Style Imports
import styles from "@/components/BackgroundArt/BackgroundArt.module.css";
import Image from "next/image";
import clsx from "clsx";

interface BackgroundArtProps {
    style: "grey" | "white";
}

export default function BackgroundArt({ style }: BackgroundArtProps) {
    return (
        <div className="w-full h-full z-[-1] fixed top-0 left-0">
            <Image 
                src="/background-art.png" 
                alt="Background Art" 
                width={400}  // Set explicit dimensions
                height={300}
                className={
                    clsx(styles.backgroundArt, "absolute object-cover h-[76%] aspect-auto bottom-[-20px] left-0", {
                        [styles.grey]: style === "grey",
                        [styles.white]: style === "white",
                    })
                }  // Position within the div
            />
        </div>
    )
}