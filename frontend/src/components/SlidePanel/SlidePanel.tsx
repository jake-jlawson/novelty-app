/**
 * SlidePanel Component
 * 
 * This component is used to display a panel that can be dragged and slid in from the bottom of the screen
 */
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "@/components/SlidePanel/SlidePanel.module.css";

interface SlidePanelProps {
    children: React.ReactNode;
    minVisibleHeight?: number; // Height in pixels that should remain visible when "closed"
    dragHandle?: React.ReactNode; // Custom drag handle component
}

export default function SlidePanel({ 
    children, 
    minVisibleHeight = 100, 
    dragHandle
}: SlidePanelProps) {
    // State: 0 = fully open, 1 = mostly closed (only minVisibleHeight showing)
    const [dragPosition, setDragPosition] = useState(1); // Start mostly closed
    const [isDragging, setIsDragging] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [dragFromContent, setDragFromContent] = useState(false); // Track if drag started from content
    
    // Refs for drag tracking
    const dragStartY = useRef<number>(0);
    const dragStartPosition = useRef<number>(0);
    const lastMoveTime = useRef<number>(0);
    const lastMoveY = useRef<number>(0);
    const velocity = useRef<number>(0);

    // Helper function to check if an element is interactive
    const isInteractiveElement = (element: Element): boolean => {
        const interactiveTags = ['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA', 'A', 'LABEL'];
        const interactiveRoles = ['button', 'link', 'textbox', 'listbox', 'combobox'];
        
        // Check tag name
        if (interactiveTags.includes(element.tagName)) {
            return true;
        }
        
        // Check role attribute
        const role = element.getAttribute('role');
        if (role && interactiveRoles.includes(role)) {
            return true;
        }
        
        // Check if element is contentEditable
        if (element.getAttribute('contenteditable') === 'true') {
            return true;
        }
        
        // Check if element has click handlers (basic check)
        if (element.getAttribute('onclick') || element.hasAttribute('data-clickable')) {
            return true;
        }
        
        return false;
    };

    // Helper function to check if drag should be allowed from content area
    const shouldAllowDragFromContent = (target: Element): boolean => {
        let currentElement: Element | null = target;
        while (currentElement) {
            if (isInteractiveElement(currentElement)) {
                return false;
            }
            // Stop checking if we reach the slide panel
            if (currentElement.classList.contains(styles.slidePanel.split(' ')[0])) {
                break;
            }
            currentElement = currentElement.parentElement;
        }
        
        return true;
    };

    // Handle drag start
    const handleDragStart = useCallback((clientY: number, fromContent: boolean = false, target?: Element) => {
        // If dragging from content, check if it's allowed
        if (fromContent && target && !shouldAllowDragFromContent(target)) {
            return false;
        }
        
        setIsDragging(true);
        setIsAnimating(false);
        setDragFromContent(fromContent);
        dragStartY.current = clientY;
        dragStartPosition.current = dragPosition;
        lastMoveTime.current = Date.now();
        lastMoveY.current = clientY;
        velocity.current = 0;
        return true;
    }, [dragPosition]);

    // Handle drag move
    const handleDragMove = useCallback((clientY: number) => {
        if (!isDragging) return;

        const deltaY = dragStartY.current - clientY; // Inverted: drag up = positive
        const dragSensitivity = 0.002; // Adjust this to make dragging more/less sensitive
        
        let newPosition = dragStartPosition.current - (deltaY * dragSensitivity);
        
        // If drag started from content area, only allow closing (increasing position)
        if (dragFromContent && newPosition < dragStartPosition.current) {
            newPosition = dragStartPosition.current;
        }
        
        newPosition = Math.max(0, Math.min(1, newPosition));
        
        // Calculate velocity for snap behavior
        const now = Date.now();
        const timeDelta = now - lastMoveTime.current;
        if (timeDelta > 0) {
            velocity.current = (lastMoveY.current - clientY) / timeDelta;
        }
        lastMoveTime.current = now;
        lastMoveY.current = clientY;
        
        setDragPosition(newPosition);
    }, [isDragging, dragFromContent]);

    // Handle drag end with snap behavior
    const handleDragEnd = useCallback(() => {
        if (!isDragging) return;
        
        setIsDragging(false);
        setIsAnimating(true);
        setDragFromContent(false);
        
        const threshold = 0.5; // 50% threshold
        const velocityThreshold = 0.5; // Adjust based on feel
        
        // Determine final position based on current position and velocity
        let finalPosition;
        if (Math.abs(velocity.current) > velocityThreshold) {
            // Fast swipe: follow velocity direction
            finalPosition = velocity.current > 0 ? 0 : 1;
        } else {
            // Slow drag: snap to nearest position based on threshold
            finalPosition = dragPosition < threshold ? 0 : 1;
        }
        
        setDragPosition(finalPosition);
        
        // Reset animation flag after transition
        setTimeout(() => setIsAnimating(false), 500); // Updated to match new duration
    }, [isDragging, dragPosition]);

    // Mouse event handlers for handle (allows both directions)
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientY, false);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        handleDragMove(e.clientY);
    }, [handleDragMove]);

    const handleMouseUp = useCallback(() => {
        handleDragEnd();
    }, [handleDragEnd]);

    // Touch event handlers for handle (allows both directions)
    const handleTouchStart = (e: React.TouchEvent) => {
        if (handleDragStart(e.touches[0].clientY, false)) {
            // Only prevent default if drag was allowed
        }
    };

    const handleTouchMove = useCallback((e: TouchEvent) => {
        e.preventDefault(); // Prevent scrolling
        handleDragMove(e.touches[0].clientY);
    }, [handleDragMove]);

    const handleTouchEnd = useCallback(() => {
        handleDragEnd();
    }, [handleDragEnd]);

    // Mouse event handlers for content area (only allows drag down/closing)
    const handleContentMouseDown = (e: React.MouseEvent) => {
        if (handleDragStart(e.clientY, true, e.target as Element)) {
            e.preventDefault();
        }
    };

    // Touch event handlers for content area (only allows drag down/closing)
    const handleContentTouchStart = (e: React.TouchEvent) => {
        if (handleDragStart(e.touches[0].clientY, true, e.target as Element)) {
            // Only prevent default if drag was allowed
        }
    };

    // Add global event listeners for drag continuation
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
            
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    // Prevent text selection during drag
    useEffect(() => {
        if (isDragging) {
            document.body.style.userSelect = 'none';
            return () => {
                document.body.style.userSelect = '';
            };
        }
    }, [isDragging]);

    return (
        <div 
            className={`${styles.slidePanelContainer} fixed right-0 w-full px-3 z-10`}
            style={{ 
                bottom: 0,
                transform: `translateY(calc(${dragPosition * 100}% - ${dragPosition * minVisibleHeight}px))`,
                transition: isAnimating ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
            }}
        >
            <div className={`${styles.slidePanel} w-full ${isDragging ? styles.dragging : ''}`}>
                {/* Drag Handle Area - allows both up and down */}
                <div 
                    className={styles.dragHandle}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    {dragHandle || (
                        <div className={styles.defaultDragHandle} />
                    )}
                </div>
                
                {/* Content Area - only allows drag down (closing) and respects interactive elements */}
                <div 
                    className={styles.content}
                    onMouseDown={handleContentMouseDown}
                    onTouchStart={handleContentTouchStart}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}