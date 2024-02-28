import { SparklesCore } from "../components/ui/sparkles";

export default function Home() {
    return (
        <main
            className="flex flex-col items-center justify-center overflow-hidden md:rounded-md relative w-full bg-white p-8 gap-y-16 sm:px-16 md:py-24 lg:px-32 xl:py-32 2xl:px-56">
            <div className="absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="#FFFFFF"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#6E2C00"
                />
            </div>
            <div className="container mx-auto px-4">
                <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center leading-none tracking-tight text-black relative z-20 mb-4">
                    Souvanny BOUNMY
                </h1>
                <p className="md:text-7xl text-2xl lg:text-6xl text-center leading-relaxed text-black relative z-20 mb-12">
                    Développeur web (fullstack)
                </p>
                <p className="md:text-7xl text-2xl lg:text-4xl text-center leading-relaxed text-black relative z-20 mb-20">
                    En recherche d&apos;une alternance en développement web
                    pour une durée de 2 ans (2024 - 2026)
                </p>
            </div>
        </main>
    )
}