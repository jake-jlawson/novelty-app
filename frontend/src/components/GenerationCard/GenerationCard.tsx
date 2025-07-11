/**
 * GenerationCard component
 * Component shows all the details of a new generated novel experience and then allows the user to either add it to their active list or delete it. The card will show:
 * - The novelty title.
 * - The date of generation.
 * - The type.
 * - The novelty content (description).
 * - The approximate time it is estimated to take.
 * - A button to accept the novelty.
 * - A button to reject the novelty.
 */
//-- IMPORTS
import styles from './GenerationCard.module.css';
import { NoveltyCore } from '@/lib/types/novelty';
// Component Imports
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ButtonWithIcon } from "@/components/ui/iconButton";
import { IconBadge } from "@/components/ui/iconBadge";
import { Separator } from "@/components/ui/separator";
// Icon Imports
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSocialDistance } from "react-icons/md";





interface GenerationCardProps {
    novelty: NoveltyCore;
}

const GenerationCard = (props: GenerationCardProps) => {
    return (
        <div className={`${styles.cardContainer} w-full p-[30px] flex flex-col justify-between gap-[15px]`}>
            
            {/* Card Header */}
            <div className={`${styles.cardHeader} w-full flex flex-col`}>
                <h1>{props.novelty.title}</h1>
                <div className="w-full flex flex-row items-center gap-[10px]">
                    <IconBadge size="default" icon={<MdOutlineSocialDistance/>} variant="default">{props.novelty.type.charAt(0).toUpperCase() + props.novelty.type.slice(1)}</IconBadge>
                    <p>{props.novelty.createdAt.toLocaleString()}</p>
                </div>
            </div>
            
            <Separator className="w-full" /> {/* Card Divider */}

            {/* Card Content */}
            <div className={`${styles.cardContent} text-wrap flex-1`}>
                <p>{props.novelty.content}</p>
            </div>

            {/*Card Control*/}
            <div className={`w-full flex flex-row justify-between items-center`}>
                <div className="flex-1">
                    <IconBadge icon={<RxCross2/>} variant="cancel" size="default">Not for me</IconBadge>
                </div>
                <Badge variant="secondary" className="text-[10px]">⏱ ~ {props.novelty.timeEstimate} mins</Badge>
                <ButtonWithIcon icon={<FaPlus/>} variant="ghost" size="sm">Add</ButtonWithIcon>
            </div>
        </div>
    );
};

export default GenerationCard;