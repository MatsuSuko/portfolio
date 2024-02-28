"use client"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


export default function Navbar() {
    const handleMailtoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.location.href = "mailto:bounmy.souvanny@gmail.com";
    };
    return (
        <nav className="shadow-lg rounded-lg">
            <div
                className="flex justify-between items-center flex-wrap">
                <Link href="/" className="flex p-4 text-lg">
                    <span className="font-bold mr-1">Souvanny</span> Bounmy
                </Link>
                <ul className="flex gap-3 m-4 items-center flex-wrap">
                    <li>
                        <Link href="/" className={buttonVariants({variant: "ghost"})}>
                            <p className="">Accueil</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={buttonVariants({variant: "ghost"})}>
                            À propos de moi
                        </Link>
                    </li>
                    <li>
                        <Link href="/CV" className={buttonVariants({variant: "ghost"})}>
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className={buttonVariants({variant: "ghost"})}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={buttonVariants({variant: "ghost"})}>
                            Contact
                        </Link>
                    </li>
                    <Separator orientation="vertical"/>
                    <li>
                        <Link href="https://www.linkedin.com/in/souvanny-bounmy/"
                              className={buttonVariants({variant: "ghost"})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-linkedin">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect width="4" height="12" x="2" y="9"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleMailtoClick} className={buttonVariants({variant: "ghost"})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
