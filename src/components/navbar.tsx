"use client"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMailtoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.location.href = "mailto:bounmy.souvanny@gmail.com";
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="shadow-lg rounded-lg">
            <div className="flex justify-between items-center flex-wrap">
                <Link href="/" className="flex p-4 text-lg">
                    <span className="font-bold mr-1">Souvanny</span> Bounmy
                </Link>
                <button
                    className="block md:hidden px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
                <ul className={`flex-col md:flex-row gap-3 m-4 items-center flex-wrap md:flex ${isMenuOpen ? "flex" : "hidden"} md:space-x-4 md:space-y-0 space-y-4 p-4 md:p-0 md:static absolute bg-white w-full left-0 top-full mt-2 border border-gray-200 rounded-lg shadow-lg block md:hidden`}>
                    <li className="text-center md:text-left">
                        <Link href="/" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Accueil
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/about" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            À propos de moi
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/CV" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            CV
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/projets" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Projets
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/contact" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                    <Separator orientation="vertical" className="md:block hidden" />
                    <li>
                        <Link href="https://www.linkedin.com/in/souvanny-bounmy/" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleMailtoClick} className={buttonVariants({variant: "ghost"})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </Link>
                    </li>
                </ul>
                <ul className="hidden md:flex flex-col md:flex-row gap-3 m-4 items-center flex-wrap md:flex md:space-x-4 md:space-y-0">
                    <li className="text-center md:text-left">
                        <Link href="/" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Accueil
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/about" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            À propos de moi
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/CV" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            CV
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/projets" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Projets
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/contact" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                    <Separator orientation="vertical" className="md:block hidden" />
                    <li>
                        <Link href="https://www.linkedin.com/in/souvanny-bounmy/" className={buttonVariants({variant: "ghost"})} onClick={handleLinkClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleMailtoClick} className={buttonVariants({variant: "ghost"})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
