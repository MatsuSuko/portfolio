"use client"
import Link from "next/link";

export default function Footer() {
    const handleMailtoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.location.href = "mailto:bounmy.souvanny@gmail.com";
    };
    return (
        <footer className="bg-gray-800 text-white py-4 text-center mt-auto rounded-t-lg shadow-lg">
            <div className="px-4 flex justify-between items-center">
                <p>
                   {/* © {new Date().getFullYear()} Copyright 2023-2024 - Souvanny Portfolio - Tous droits réservés.*/}
                    © {new Date().getFullYear()} Copyright 2024 - Souvanny Portfolio
                </p>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="https://www.linkedin.com/in/souvanny-bounmy/">
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
                        <Link href="#" onClick={handleMailtoClick}>
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
        </footer>
    );
}
