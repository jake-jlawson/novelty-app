/**
 * GenerationButton Component
 * Provides a button to generate new novelties. This component:
 * - Handles CSS and styling of the button
 * - Handles animation states and logic for the button.
 * - Triggers requests for novelty generation.
 */
"use client";
import { useState } from "react";
import styles from "./GenerationButton.module.css";

export default function GenerationButton() {
    const [isInactive, setIsInactive] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    /**
     * Handles the generation of a new novelty.
     */
    const handleGenerate = () => {
        
        // if inactive block the function
        if (isInactive) return;
    

        
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
        }, 1000);
    }



    return (
      <button
        className={`${styles.generationButton} ${
          isInactive ? styles.inactive : styles.active
        } flex flex-row justify-center items-center px-[25px]`}
        onClick={handleGenerate}
      >
        <p
          className={`${styles.generationButtonText} max-w-[120px] mt-[20px] mb-[18px]`}
        >
          Give me something new...
        </p>

        <span
          className={`${styles.loader} aspect-square`}
          style={{
            height: isGenerating ? "20%" : "0%",
            marginLeft: isGenerating ? "15px" : "0px",
          }}
        ></span>
      </button>
    );
}

