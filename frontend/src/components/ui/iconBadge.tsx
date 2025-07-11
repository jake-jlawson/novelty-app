


import { Badge } from "@/components/ui/badge";

type IconBadgeProps = {
    icon: React.ReactNode;
    variant: "outline" | "secondary" | "default" | "destructive" | "cancel" | null | undefined;
    size: "sm" | "default" | "lg" | "icon";
    children: React.ReactNode;
}

export function IconBadge({icon, variant, size, children}: IconBadgeProps) {
  return (
    <Badge variant={variant} size={size}>
      {icon} {children}
    </Badge>
  )
}
