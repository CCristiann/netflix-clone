import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("max-w-7xl mx-auto w-full px-4 lg:px-0", className)}>
            {children}
        </div>
    )
}