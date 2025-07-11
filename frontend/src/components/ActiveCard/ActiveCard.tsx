/**
 * ActiveCard Component
 * This component goes inside the ActiveBoard component and displays a single active novelty.
 * It should contain:
 * - Basic novelty information (title, content, etc.)
 * - A tick box to allow the user to mark the novelty as completed
 */
"use client";
import { useState } from "react";

import { NoveltyCore } from "@/lib/types/novelty";
import styles from "@/components/ActiveCard/ActiveCard.module.css";

interface activeCardProps {
    novelty: NoveltyCore;
}

export default function ActiveCard({ novelty }: activeCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    
    return (
        <div className={`${styles.cardContainer} w-full flex flex-row justify-center items-center`} onClick={handleExpand}>
            <section className={`${styles.cardContent} flex flex-col justify-center items-start py-[2px] flex-1 min-w-0 my-[6px]`}>
                <div className={`${isExpanded ? styles.expanded : styles.compressed} w-full pl-[20px]`}>
                    <h1>{novelty.title}</h1>
                    <p>{novelty.content}</p>
                </div>
            </section>
            <section className={`${styles.cardCheckbox} h-[40px] aspect-square m-[4px] flex-shrink-0`}></section>
        </div>
    )
}