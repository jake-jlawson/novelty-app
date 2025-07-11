import SlidePanel from "@/components/SlidePanel/SlidePanel";
import styles from "./generation.module.css";

export default function GenerationPage() {
    const genSettingsDefaultSize = 100;
    
    return (
        <div className="h-full">
            
            <main 
                className={`${styles.generationContentArea} h-full flex flex-col justify-center items-center`}
                style={{
                    paddingBottom: `${genSettingsDefaultSize - 12}px`,
                }}
            >
                This will be a button
            </main>
            
            
            
            
            
            
            
            
            
            
            <SlidePanel minVisibleHeight={genSettingsDefaultSize}>
                <div className="h-[500px] w-full">
                    Hello
                </div>
            </SlidePanel>

        </div>
    )
}