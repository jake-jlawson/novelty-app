/**
 * ActiveBoard Component
 * This component displays the active board, which shows the current novelties / ideas that the user has accepted but has not yet completed
 * It contains:
 * - Title at the top stating "Active Novelties" along with a counter on the far left.
 * - If there are active novelties, a list of them is displayed.
 * - If there are no active novelties, a message is displayed stating "No active novelties"
 */

// Style Imports
"use client";
import styles from "@/components/ActiveBoard/ActiveBoard.module.css";
// Import Novelty Types
import { NoveltyCore } from "@/lib/types/novelty";
// Import test data
import { exampleNoveltyArrays } from "@/lib/exampleNoveltyData";
// Import React
 import { useEffect, useState } from "react";
 // Import ActiveCard component
import ActiveCard from "@/components/ActiveCard/ActiveCard";





export default function ActiveBoard() {
    
    const [activeNovelties, setActiveNovelties] = useState<NoveltyCore[] | null>(null);
    
    useEffect(() => {
        setActiveNovelties(exampleNoveltyArrays[1]);
    }, []);
    
    
    return (
      <div
        className={`${styles.container} w-full flex flex-col items-center justify-center`}
      >
        {/* Header */}
        <header
          className={`${styles.header} flex items-center justify-between w-full p-0 m-0`}
        >
          <p>Active Novelties</p> {/* Title */}
          <p>{activeNovelties?.length || 0}/3</p>
        </header>

        <div className={`${styles.divider} w-full`}></div> {/* Divider */}

        {/* List of active novelties */}
        <main className={`${styles.list} w-full`}>
          {activeNovelties?.length ? (
            activeNovelties.map((novelty) => (
                <ActiveCard key={novelty.id} novelty={novelty} />
            ))
          ) : (
            <p>Novelties you choose to complete will appear here...</p>
          )}
        </main>
      </div>
    );
}
