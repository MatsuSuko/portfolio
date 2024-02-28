"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {Separator} from "@/components/ui/separator"

import Image from "next/image";
import ImgProjetSirio from "../../../../public/imgProjetSirio.png";
import ImgProjetMakAir from "../../../../public/imgProjetMakAir.jpg";
import ImgProjetMiroirConnecte from "../../../../public/imgProjetMiroirConnecte.jpg";

export default function Projets() {
    return (
        <div>
            <h1 className="font-bold text-2xl p-7 shadow">
                Mes projets
            </h1>
            <div className="flex justify-center p-14">
                <div className="grid grid-cols-2 gap-7 w-4/5">
                    <Sheet>
                        <SheetTrigger>
                            <Card className="border shadow-xl hover:scale-105 transition duration-150 ease-in bg-slate-50">
                                <CardHeader>
                                    <CardTitle>Projet Sirio</CardTitle>
                                    <CardDescription>Développement web</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-center">
                                    <Image src={ImgProjetSirio} alt="imgProjetSirio"
                                           className="flex w-10/12 rounded-lg border shadow-lg"/>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    2023 - 2024
                                </CardFooter>
                            </Card>
                        </SheetTrigger>
                        <SheetContent side={"right"} className="w-1/2">
                            <SheetHeader>
                                <SheetTitle className="font-bold text-2xl">Projet Sirio</SheetTitle>
                                <SheetDescription>
                                    <div className="flex justify-center p-7">
                                        <Image src={ImgProjetSirio} alt="imgProjetSirio"
                                               className="w-7/12 rounded-lg border shadow-2xl"/>
                                    </div>
                                    <div className="flex flex-col pb-4">
                                        <h1 className="font-bold text-lg">Description</h1>
                                        <p>
                                            Pour mon diplôme de Bachelor en développement web, j&apos;ai participé à la
                                            conception d&apos;un site web d&apos;e-commerce ainsi que d&apos;une application
                                            mobile nommée « Sirio ». Cette solution s&apos;adresse spécifiquement aux clients
                                            cherchant à acquérir des meubles ou des chaises, semblable à IKEA. Notre
                                            équipe
                                            comptait quatre membres : un chef de projet, deux développeurs travaillant
                                            sur
                                            le backend, un développement frontend ainsi que mobile.

                                            J&apos;étais personnellement chargé de la partie frontend et de
                                            l&apos;application mobile. L&apos;objectif principal de notre projet consistait à
                                            reproduire fidèlement les fonctionnalités offertes par un véritable magasin
                                            en
                                            ligne. Ainsi, le site internet proposait divers services tels que la
                                            possibilité
                                            de sélectionner un article, de l&apos;ajouter au panier, de visualiser les
                                            informations relatives au produit et finalement passer commande.
                                        </p>
                                    </div>
                                    <Separator orientation="horizontal" className="mb-4"/>
                                    <div className="grid grid-cols-2">
                                        <div className="w-11/12">
                                            <h1 className="font-bold text-lg">Développement frontend</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-col gap-2 list-disc list-inside">
                                                <li>
                                                    Création intégrale de l&apos;interface utilisateur (Laravel et Tailwind)
                                                </li>
                                                <li>
                                                    Utilisation de Figma pour concevoir l&apos;interface utilisateur de
                                                    l&apos;application
                                                </li>
                                                <li>
                                                    Emploi de GitLab pour gérer les versions du projet
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-lg">Infos projet</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul>
                                                <li className="flex mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-calendar">
                                                        <path d="M8 2v4"/>
                                                        <path d="M16 2v4"/>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                                                        <path d="M3 10h18"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Année :</span>2023 - 2024
                                                </li>
                                                <li className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-tag">
                                                        <path
                                                            d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
                                                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Catégorie :</span>développement
                                                    web
                                                </li>
                                            </ul>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-wrap gap-2">
                                                <li className="border rounded-lg p-1">
                                                    HTML
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    CSS
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    JavaScript/TypeScript
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    Laravel
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    Tailwind
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    Figma
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    GitLab
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger>
                            <Card className="border shadow-xl hover:scale-105 transition duration-150 ease-in bg-slate-50">
                                <CardHeader>
                                    <CardTitle>Projet MakAir</CardTitle>
                                    <CardDescription>Développement web</CardDescription>
                                </CardHeader>
                                <CardContent className="justify-center">
                                    <Image src={ImgProjetMakAir} alt="imgProjetMakAir"
                                           className="w-10/12 rounded-lg border shadow-lg"/>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    2022 - 2023
                                </CardFooter>
                            </Card>
                        </SheetTrigger>
                        <SheetContent side={"right"} className="w-1/2">
                            <SheetHeader>
                                <SheetTitle className="font-bold text-2xl">Projet MakAir</SheetTitle>
                                <SheetDescription>
                                    <div className="flex justify-center p-7">
                                        <Image src={ImgProjetMakAir} alt="imgProjetMakAir"
                                               className="w-7/12 rounded-lg border shadow-2xl"/>
                                    </div>
                                    <div className="flex flex-col pb-4">
                                        <h1 className="font-bold text-lg">Description</h1>
                                        <p>
                                            Pour l&apos;obtention de mon diplôme BTS en Systèmes
                                            Numériques, option Informatique et Réseaux (BTS SN IR), j&apos;ai pris part à
                                            un projet nommée « projet MakAir ».
                                            <span
                                                className="font-bold inline-block">C&apos;est quoi le projet MakAir ?
                                        </span>
                                            Ce projet est un effort collectif open source
                                            ayant pour objectif la conception et la fabrication de respirateurs
                                            artificiels
                                            légers, peu coûteux et facilement reproductibles. Initié pendant la pandémie
                                            mondiale liée au COVID-19, il vise à remédier à la grave pénurie de matériel
                                            médical crucial, notamment les ventilateurs nécessaires pour prendre en
                                            charge
                                            certains malades touchés par le virus.

                                            Notre équipe, composée de quatre personnes, incluait un développeur dédié au
                                            backend, deux autres en systèmes embarqués, ainsi qu&apos;un développeur
                                            affecté au frontend. Mon rôle particulier concernait la réalisation de la
                                            partie
                                            frontend et backend du projet. Plus précisément, j&apos;avais pour mission de
                                            récupérer les
                                            données provenant d&apos;un appareil MakAir afin de les afficher sur un site Web
                                            consultable, permettant ainsi d&apos;accéder aux informations relatives à un
                                            patient,
                                            contenant des éléments tels que son identité, ses coordonnées, son poids, sa
                                            fréquence respiratoire, et bien d&apos;autres paramètres pertinents.

                                        </p>
                                    </div>
                                    <Separator orientation="horizontal" className="mb-4"/>
                                    <div className="grid grid-cols-2">
                                        <div className="w-11/12">
                                            <h1 className="font-bold text-lg">Développement fullstack</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-col gap-2 list-disc list-inside">
                                                <li>
                                                    Création intégrale de l’interface utilisateur (PHP)
                                                </li>
                                                <li>
                                                    Création de la structure d&apos;une base de données (SQL)
                                                </li>
                                                <li>
                                                    Extraire des données depuis une machine embarquée (C++)
                                                </li>
                                                <li>
                                                    Emploi de GitHub pour gérer les versions du projet
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-lg">Infos projet</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul>
                                                <li className="flex mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-calendar">
                                                        <path d="M8 2v4"/>
                                                        <path d="M16 2v4"/>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                                                        <path d="M3 10h18"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Année :</span>2022 - 2023
                                                </li>
                                                <li className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-tag">
                                                        <path
                                                            d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
                                                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Catégorie :</span>développement
                                                    web
                                                </li>
                                            </ul>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-wrap gap-2">
                                                <li className="border rounded-lg p-1">
                                                    HTML
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    CSS
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    JavaScript
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    PHP
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    C++
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    SQL
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    ChartJS
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    GitHub
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger>
                            <Card className="border shadow-xl hover:scale-105 transition duration-150 ease-in bg-slate-50">
                                <CardHeader>
                                    <CardTitle>Miroir connecté</CardTitle>
                                    <CardDescription>Développement système embarqué</CardDescription>
                                </CardHeader>
                                <CardContent className="justify-center">
                                    <Image src={ImgProjetMiroirConnecte} alt="{imgProjetMiroirConnecte}"
                                           className="w-10/12 rounded-lg shadow-lg"/>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    2020 - 2021
                                </CardFooter>
                            </Card>
                        </SheetTrigger>
                        <SheetContent side={"right"} className="w-1/2">
                            <SheetHeader>
                                <SheetTitle className="font-bold text-2xl">Miroir connecté</SheetTitle>
                                <SheetDescription>
                                    <div className="flex justify-center p-7">
                                        <Image src={ImgProjetMiroirConnecte} alt="{imgProjetMiroirConnecte}"
                                               className="w-7/12 rounded-lg border shadow-2xl"/>
                                    </div>
                                    <div className="flex flex-col pb-4">
                                        <h1 className="font-bold text-lg">Description</h1>
                                        <p>
                                            J&apos;ai décidé de réaliser un projet seul chez moi afin de développer
                                            mes compétences en matière de programmation et de systèmes embarqués. Mon
                                            admiration pour Iron Man étant restée intacte depuis mon enfance, ses
                                            technologies avancées et ses armures ont inspiré mon choix professionnel
                                            vers le
                                            développement. Le projet « Magic Mirror » a attiré mon attention ; bien
                                            qu&apos;il
                                            fût déjà existant, je l&apos;ai adapté selon mes désirs et préférences. Même si
                                            certaines parties étaient préconçues, ce projet m&apos;a apporté beaucoup de
                                            nouvelles connaissances techniques, m&apos;a aidé à mieux me connaître, à
                                            identifier
                                            mes aspirations et à cultiver ma persévérance pendant le processus de
                                            fabrication du miroir et de son programme informatique. Cela représente un
                                            investissement considérable en termes de temps et d&apos;efforts.
                                            <span className="font-bold inline-block">
                                            C&apos;est quoi un Magic Mirror ?
                                        </span>
                                            Magic Mirror est un projet open source sympa et inventif qui convertit un
                                            miroir
                                            normal en un écran interactif affichant des infos pratiques. Avec Node.js,
                                            JavaScript, HTML et CSS, un petit ordinateur tel qu&apos;un Raspberry Pi, et un
                                            grand
                                            écran (tactile ou pas), vous avez accès aux prévisions météo, news, agenda,
                                            rappels, listes de course, transports, domotique et surveillance vidéo. La
                                            communauté dynamique crée continuellement de nouveaux modules pour ajouter
                                            des
                                            fonctionnalités supplémentaires au Magic Mirror, rendant votre quotidien
                                            plus
                                            facile et stylé.
                                        </p>
                                    </div>
                                    <Separator orientation="horizontal" className="mb-4"/>
                                    <div className="grid grid-cols-2">
                                        <div className="w-11/12">
                                            <h1 className="font-bold text-lg">Développement système embarqué</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-col gap-2 list-disc list-inside">
                                                <li>
                                                    Intégration d&apos;un écran à un miroir ainsi qu&apos;un Raspberry Pi
                                                </li>
                                                <li>
                                                    Configuration du système d&apos;exploitation et installation du logiciel
                                                    Magic Mirror sur le Raspberry Pi
                                                </li>
                                                <li>
                                                    Adaptation des modules Magic Mirror conformément à mes préférences
                                                    (par
                                                    exemple : météo, Spotify, liste de courses)
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-lg">Infos projet</h1>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul>
                                                <li className="flex mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-calendar">
                                                        <path d="M8 2v4"/>
                                                        <path d="M16 2v4"/>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                                                        <path d="M3 10h18"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Année :</span>2020 - 2021
                                                </li>
                                                <li className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="lucide lucide-tag">
                                                        <path
                                                            d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
                                                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
                                                    </svg>
                                                    <span className="underline ml-1 mr-1">Catégorie :</span>développement
                                                    système embarqué
                                                </li>
                                            </ul>
                                            <Separator orientation="horizontal" className="w-4/5 mt-2 mb-2"/>
                                            <ul className="flex flex-wrap gap-2">
                                                <li className="border rounded-lg p-1">
                                                    HTML
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    CSS
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    JavaScript
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    NodeJS
                                                </li>
                                                <li className="border rounded-lg p-1">
                                                    Raspberry pi
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}