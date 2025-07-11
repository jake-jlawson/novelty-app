


import { Button } from "@/components/ui/button";

type IconButtonProps = {
    icon: React.ReactNode;
    variant: "outline" | "secondary" | "ghost" | "link";
    size: "sm" | "default" | "lg" | "icon";
    children: React.ReactNode;
}

export function ButtonWithIcon({icon, variant, size, children}: IconButtonProps) {
  return (
    <Button variant={variant} size={size}>
      {icon} {children}
    </Button>
  )
}
