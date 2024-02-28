import Link from "next/link";
import Image from "next/image";
import Profile from "../../public/photoProfil.jpeg"

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Hero() {
    /*const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;*/
    const words = "Hey ! Je suis Souvanny BOUNMY";
    const words2 = "Je suis développeur web full stack";
    // const words3 = "Spécialisé dans le développement web fullstack, je conçois et développe des solutions digitales innovantes pour répondre aux besoins de mes clients.";
    return (
        /*<section className="flex pt-16 pb-12 bg-cover bg-center bg-gradient-to-tl from-blue-900 to-green-500 via-purple-900">
            <div className="w-full h-full flex fleÒx-col justify-center items-center overflow-hidden">
                <div
                    className="relative w-full max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto mb-16 -mt-32 z-10 text-center lg:text-left">
                    <span className="tracking-widest uppercase font-bold block mb-1 text-yellow-400">Bonjour, Je suis Souvanny.</span>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-none tracking-normal mb-4 mt-2">Je
                        suis Développeur Logiciel basé à Paris.</h1>
                    <p className="mb-6 text-lg sm:text-xl font-body text-white">Spécialisé dans le développement web
                        fullstack, je conçois et développe des solutions digitales innovantes pour répondre aux besoins
                        de mes clients.</p>
                    <Link href="/contact" legacyBehavior>
                        <button type="button"
                                className="btn btn-primary rounded-md shadow-sm focus:ring-offset-2 focus:ring-indigo-500 focus:ring-2 focus:shadow-outline-indigo inline-block text-center py-3 px-6 font-semibold leading-5 transition duration-150 ease-in-out transform bg-white rounded-full shadow-md hover:scale-110 focus:outline-none active:bg-opacity-75">Me
                            Contacter
                        </button>
                    </Link>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 pointer-events-none overlay opacity-10 blur-full bg-gradient-to-tr from-transparent to-black"/>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 hidden lg:block pointer-events-none overlay opacity-75 blend-hard-light mix-blend-multiply bg-top bg-local bg-no-repeat bg-cover bg-center scale-150 origin-bottom-right filter brightness-50 saturate-50 contrast-75"/>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 hidden lg:block pointer-events-none overlay opacity-100 blend-overlay bg-top bg-local bg-no-repeat bg-cover bg-center scale-150 origin-bottom-right filter grayscale"/>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 hidden lg:block pointer-events-none overlay opacity-25 bg-top bg-local bg-no-repeat bg-cover bg-center scale-150 origin-bottom-right filter sepia"/>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 hidden lg:block pointer-events-none overlay opacity-15 bg-top bg-local bg-no-repeat bg-cover bg-center scale-150 origin-bottom-right filter hue-rotate-90"/>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 hidden lg:block pointer-events-none overlay opacity-30 bg-top bg-local bg-no-repeat bg-cover bg-center scale-150 origin-bottom-right filter saturate-0"/>
                <div className="relative w-full max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto mt-24 z-20">
                    <Image src={Profile} layout="responsive" objectFit="contain" width={300} height={300}
                           quality={80} priority alt="Souvanny profile picture"/>
                </div>
            </div>
        </section>*/
        /*<section id="hero" className="flex flex-row h-screen">
            <div className="flex flex-col justify-center bg-gray-800 p-8">
                <span className="text-xl font-bold">
                    Bonjour, Je suis Souvanny.
                </span>
                <h1 className="text-3xl font-bold mt-4">
                    Je suis Développeur Fullstack
                </h1>
                <p className="mt-4">
                    Spécialisé dans le développement web fullstack, je conçois et développe des solutions digitales
                    innovantes pour répondre aux besoins de mes clients.
                </p>
            </div>
            <div className="flex justify-center items-center bg-indigo-600 p-8">
                <Image src={Profile} alt="" width={200} height={200} className="rounded-lg"/>
            </div>
        </section>*/
        <section className="flex flex-row w-full">
            <div className="flex flex-col justify-center bg-gray-800 p-8 w-3/5">
        {/*<span className="text-xl font-bold">
            Bonjour, Je suis Souvanny.
        </span>
                <h1 className="text-3xl font-bold mt-4">
                    Je suis Développeur Fullstack
                </h1>
                <p className="mt-4">
                    Spécialisé dans le développement web fullstack, je conçois et développe des solutions digitales
                    innovantes pour répondre aux besoins de mes clients.
                </p>*/}

                <TextGenerateEffect className="text-xl font-bold" words={words}/>
                <h1>
                    <TextGenerateEffect className="text-3xl font-bold mt-4" words={words2}/>
                </h1>
            </div>
            <div className="flex justify-center items-center bg-indigo-600 p-8 w-2/5">
                {/* <Image src={Profile} alt="" width={400} height={400} className="shadow-lg rounded-3xl hover:bg-green-300"/>*/}
                <Image
                    src={Profile}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-3xl shadow-lg hover:scale-105 transform transition duration-500 ease-in-out hover:bg-slate-300"
                />
            </div>
        </section>
        /*#F4ECE6*/

    );
}