"use client"
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function Contact() {
    const handleMailtoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.location.href = "mailto:bounmy.souvanny@gmail.com";
    };
    return (
        <section className="flex container mx-auto bg-white dark:bg-gray-900 justify-center items-center">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center mb-5">
                    <p className="font-medium text-blue-500 text-2xl dark:text-blue-400">Contactez-moi</p>

                    <h1 className="mt-2 text-3xl font-semibold text-gray-800 md:text-3xl dark:text-white">Où me
                        trouver</h1>

                    {/*<p className="mt-3 text-gray-500 dark:text-gray-400">Je suis toujours là pour discuter</p>*/}
                </div>
                <Separator/>
                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                        <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">Email</h2>
                        {/*<p className="mt-2 text-gray-500 dark:text-gray-400">Je suis toujours là pour discuter</p>*/}
                        <Link href="#" onClick={handleMailtoClick}
                              className="mt-2 text-xl text-blue-500 dark:text-blue-400">bounmy.souvanny@gmail.com</Link>
                    </div>


                    <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                        <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">Téléphone</h2>
                        {/*<p className="mt-2 text-gray-500 dark:text-gray-400">Du lundi au vendredi</p>*/}
                        {/*<p className="mt-2 text-gray-500 dark:text-gray-400">Toujours disponible</p>*/}
                        <p className="mt-2 text-xl text-blue-500 dark:text-blue-400">06 74 74 29 96</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect width="4" height="12" x="2" y="9"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                </span>

                        <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">LinkedIn</h2>
                        {/*<p className="mt-2 text-gray-500 dark:text-gray-400">Je suis aussi ici</p>*/}
                        <Link href="https://www.linkedin.com/in/souvanny-bounmy/"
                              className="mt-2 text-lg text-blue-500 dark:text-blue-400">Souvanny Bounmy</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
