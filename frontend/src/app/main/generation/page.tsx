import SlidePanel from "@/components/SlidePanel/SlidePanel";
import styles from "./generation.module.css";
import GenerationButton from "@/components/GenerationButton/GenerationButton";
import GenerationCard from "@/components/GenerationCard/GenerationCard";
import { exampleNoveltyArrays } from "@/lib/exampleNoveltyData";


export default function GenerationPage() {
    const genSettingsDefaultSize = 100;
    
    return (
        <div className="h-full">
            
            <main 
                className={`${styles.generationContentArea} h-full flex flex-col justify-center items-center px-[10px]`}
                style={{
                    paddingBottom: `${genSettingsDefaultSize - 12}px`,
                }}
            >
                {/* <GenerationButton /> */}
                <GenerationCard novelty={exampleNoveltyArrays[1][1]} />
            </main>
            
            
            
            
            
            
            
            
            
            
            <SlidePanel minVisibleHeight={genSettingsDefaultSize}>
                <div className="h-[500px] w-full">
                    Hello
                </div>
            </SlidePanel>

        </div>
    )
}