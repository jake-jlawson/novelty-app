/**
 * ActiveBoard Component
 * This component displays the active board, which shows the current novelties / ideas that the user has accepted but has not yet completed
 * It contains:
 * - Title at the top stating "Active Novelties" along with a counter on the far left.
 * - If there are active novelties, a list of them is displayed.
 * - If there are no active novelties, a message is displayed stating "No active novelties"
 */

// Style Imports
import styles from "@/components/ActiveBoard/ActiveBoard.module.css";

export default function ActiveBoard() {
    return (
        <div className={`${styles.container} w-full flex flex-col items-center justify-center`}>

            <header className={`${styles.header} flex items-center justify-between w-full p-0 m-0`}>
                <p>Active Novelties</p>
                <p>0/3</p>
            </header>

            <div className={`${styles.divider} w-full`}></div>

            <main className={`${styles.list} w-full`}>
                <p>Novelties you choose to complete will appear here...</p>
            </main>
        </div>
    )
}
