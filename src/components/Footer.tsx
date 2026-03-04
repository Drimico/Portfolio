import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-card relative border-t border-border flex flex-wrap justify-between items-center p-2 mt-3">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Drimico.co. All rights reserved.</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}