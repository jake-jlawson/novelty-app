/**
 * IconButton Component
 * IconButton is a simple component that displays a react icon and acts as a button to link to a page.
 * 
 * @props {React.ReactNode} icon - The icon to display
 * @props {number | string} size - A tailwind class for either height or width (e.g., "h-10", "w-[50%]")
 * @props {string} href - The href to navigate to
 * @props {string} sizeClass - Tailwind class for height and width (e.g., "h-10", "w-[50%]")
*/
import Link from 'next/link';
import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  size?: number | string;
  href: string;
}

const IconButton = ({ icon, size, href }: IconButtonProps) => {
  // Clone the icon element and add classes to make it fill the container
  const iconWithClasses = React.isValidElement(icon) 
    ? React.cloneElement(icon, {
        className: `w-full h-full ${(icon.props as any).className || ''}`,
      } as any)
    : icon;

  return (
    <Link href={href} className={`aspect-square ${size} inline-flex items-center justify-center rounded-lg duration-200`}>
      {iconWithClasses}
    </Link>
  );
};

export default IconButton;