
export default function CV() {
    return (
        <div className="w-full">
            <h1 className="font-bold text-2xl p-7 shadow">
                Mes expériences professionelles
            </h1>

            <div className="container mx-auto p-14">
                <div className="grid grid-rows-1 gap-7">

                    <div className="flex justify-start">
                        <div className="w-3/5 bg-slate-50">
                            <div className="flex flex-col p-4 border rounded-lg shadow-xl">
                                <h1 className="font-bold text-xl">Novembre 2023 - Aujourd’hui</h1>
                                <h2 className="text-lg ml-2">SARL PARAMY (restaurant) - Pouzauges</h2>
                                <h1 className="text-lg">Alternant en tant que développeur web (fullstack)</h1>
                                <p className="mt-2">
                                    Création d’une application web permettant la gestion des stocks
                                    de l’entreprise ainsi qu’une application de shopping list :
                                </p>
                                <ul className="pl-4 list-disc list-inside">
                                    <li>
                                        Définition de la modélisation des données (MongoDB)
                                    </li>
                                    <li>
                                        Développement complet du back-end de l&apos;application (ExpressJS)
                                    </li>
                                    <li>
                                        Création intégrale de l’interface utilisateur (NextJS et Tailwind)
                                    </li>
                                    <li>
                                        Emploi de GitHub pour gérer les versions du projet
                                    </li>
                                    <li>
                                        Utilisation de Figma pour concevoir l&apos;interface utilisateur de l&apos;application
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-3/5 bg-slate-50">
                            <div className="flex flex-col p-4 border rounded-lg shadow-xl">
                                <h1 className="font-bold text-xl">6 semaines</h1>
                                <h2 className="text-lg ml-2">K-Technologies (informatique) - La Meilleraie-Tillay,
                                    Pouzauges</h2>
                                <h1 className="text-lg">Stage en tant que développeur web (fullstack)</h1>
                                <p className="mt-2">
                                    {/*&apos; c'est pour les accents*/}
                                    Création d’une application web permettant la gestion des
                                    matériels de l&apos;entreprise en interne :
                                </p>
                                <ul className="pl-4 list-disc list-inside">
                                    <li>
                                        Gestion de la base de données (MySQL)
                                    </li>
                                    <li>
                                        Automatisation de site web (PHP)
                                    </li>
                                    <li>
                                        Développement de fonctionnalités additionnelles (PHP)
                                    </li>
                                    <li>
                                        Développement de solutions et d&apos;applications informatiques sur
                                        mesure (PHP)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div
                            className="w-3/5 bg-slate-50">
                            <div className="flex flex-col p-4 border rounded-lg shadow-xl">
                                <h1 className="font-bold text-xl">Été 2018 - 2020, juillet 2022 - en CDD jusqu&apos;au 31
                                    août 2023</h1>
                                <h2 className="text-lg ml-2">SARL PARAMY (restaurant) - Pouzauges</h2>
                                <h1 className="text-lg">Serveur</h1>
                                <p className="mt-2">
                                    Création d’une application web permettant la gestion des stocks
                                    de l’entreprise ainsi qu’une application de shopping list :
                                </p>
                                <ul className="pl-4 list-disc list-inside">
                                    <li>
                                        Service des boissons à table
                                    </li>
                                    <li>
                                        Préparation de commandes à emporter
                                    </li>
                                    <li>
                                        Gestion de la caisse
                                    </li>
                                    <li>
                                        Accueil des clients
                                    </li>
                                    <li>
                                        Barman
                                    </li>
                                    <li>
                                        Plonge
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="font-bold text-2xl p-7 shadow">
                Mes formations
            </h1>
            <div className="container mx-auto p-14">
                <div className="grid grid-cols-3 gap-7">
                    <div className="border rounded-lg shadow-xl p-4 bg-slate-50">
                        <h1 className="font-bold text-xl mb-2">2023 - 2024</h1>
                        <h2 className="text-lg ml-4">Bachelor spécialisation en développement (en cours)</h2>
                        <h3 className="ml-4">Sup de Vinci - Nantes</h3>
                    </div>
                    <div className="border rounded-lg shadow-xl p-4 bg-slate-50">
                        <h1 className="font-bold text-xl mb-2">2021 - 2023</h1>
                        <h2 className="text-lg ml-4">BTS SN Option IR (Systèmes Numériques option Informatique et
                            Réseaux) (diplômé)</h2>
                        <h3 className="ml-4">Lycée Saint Gabriel - Saint Laurent sur Sèvre</h3>
                    </div>
                    <div className="border rounded-lg shadow-xl p-4 bg-slate-50">
                        <h1 className="font-bold text-xl mb-2">2018 - 2021</h1>
                        <h2 className="text-lg ml-4">Bac STI2D (Siences et Technologies de l&apos;Industrie et du
                            Développement
                            Durable) (diplômé)</h2>
                        <h3 className="ml-4">Lycée Saint Gabriel - Saint Laurent sur Sèvre</h3>
                    </div>
                </div>
            </div>


            <h1 className="font-bold text-2xl p-7 shadow">
                Mes compétences
            </h1>
            <div className="container mx-auto p-14">
                <div className="grid grid-cols-4 gap-7">
                    <div className="p-4 border rounded-lg shadow-lg bg-slate-50">
                        <p className="font-bold text-lg text-center">Langages</p>
                        <ul className="text-center p-4 ">
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JavaScript/TypeScript
                            </li>
                            <li>
                                PHP
                            </li>
                            <li>
                                SQL
                            </li>
                            <li>
                                C/C++
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Swift
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg shadow-lg bg-slate-50">
                        <p className="font-bold text-lg text-center">Frameworks et CMS</p>
                        <ul className="text-center p-4 ">
                            <li>
                                NextJS/ReactJS
                            </li>
                            <li>
                                Laravel
                            </li>
                            <li>
                                Tailwind
                            </li>
                            <li>
                                ExpressJS
                            </li>
                            <li>
                                Wordpress
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg shadow-lg bg-slate-50">
                        <p className="font-bold text-lg text-center">Base de données</p>
                        <ul className="text-center p-4 ">
                            <li>
                                MySQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg shadow-lg bg-slate-50">
                        <p className="font-bold text-lg text-center">Plateformes et outils</p>
                        <ul className="text-center p-4 ">
                            <li>
                                Windows
                            </li>
                            <li>
                                MacOS/IOS
                            </li>
                            <li>
                                Linux
                            </li>
                            <li>
                                Microsoft office
                            </li>
                            <li>
                                VS Code
                            </li>
                            <li>
                                PhpStorm
                            </li>
                            <li>
                                Git/GitHub/GitLab
                            </li>
                            <li>
                                Windows server
                            </li>
                            <li>
                                Figma
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <h1 className="font-bold text-2xl p-7 shadow">
                Intérêts et loisirs
            </h1>
            <div className="container mx-auto p-14">
                <div className="grid grid-cols-3 gap-7">
                    <div
                        className="flex flex-col border shadow-xl w-auto h-auto rounded-lg justify-center items-center p-4 bg-slate-50">
                        <p className="font-bold">Sport, Jeux vidéo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-down">
                            <path d="M12 5v14"/>
                            <path d="m19 12-7 7-7-7"/>
                        </svg>
                        <ul className="text-center">
                            <li>
                                Persévérance
                            </li>
                            <li>
                                Motivation
                            </li>
                            <li>
                                Esprit d&apos;équipe
                            </li>
                        </ul>
                    </div>
                    <div
                        className="flex flex-col border shadow-xl w-auto h-auto rounded-lg justify-center items-center p-4 bg-slate-50">
                        <p className="font-bold text-center">Dessin, Cuisine, Musique, Cinéma, Bricolage, Voyage</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-down">
                            <path d="M12 5v14"/>
                            <path d="m19 12-7 7-7-7"/>
                        </svg>
                        <ul className="text-center">
                            <li>
                                Créativité
                            </li>
                            <li>
                                Rigueur
                            </li>
                            <li>
                                Organisation
                            </li>
                            <li>
                                Polyvalence
                            </li>
                        </ul>
                    </div>
                    <div
                        className="flex flex-col border shadow-xl w-auto h-auto rounded-lg justify-center items-center p-4 bg-slate-50">
                        <p className="font-bold text-center">Informatique, Haute technologie, Automobile</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-down">
                            <path d="M12 5v14"/>
                            <path d="m19 12-7 7-7-7"/>
                        </svg>
                        <ul className="text-center">
                            <li>
                                Curiosité
                            </li>
                            <li>
                                Passionné
                            </li>
                            <li>
                                Veille technologique
                            </li>
                            <li>
                                Esprit d&apos;équipe
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}