import ImgPhotoProfil from "@/../public/imgPhotoProfil.jpg"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col w-full">
            <h1 className="font-bold text-2xl p-7 shadow">
                À propos de moi
            </h1>

            <div className="flex container mx-auto p-4 justify-center items-center h-full">
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-4 border rounded-lg shadow-xl bg-slate-50">
                        <h1 className="text-xl font-medium mb-8 text-center">
                            Hey ! Je suis Souvanny BOUNMY et je suis un développeur web (fullstack)
                        </h1>
                        <p>
                            Ma passion pour l&apos;informatique est née dès mon plus jeune âge, et elle m&apos;a toujours
                            intrigué et captivé. Après avoir effectué plusieurs stages dans ce domaine, j&apos;ai pleinement
                            réalisé que le développement informatique était la voie que je souhaitais suivre. C&apos;est
                            pourquoi j&apos;ai choisi de poursuivre mes études avec un Bac STI2D spécialisé en informatique
                            et réseaux. Actuellement engagé dans un Bachelor spécialisé en développement, mon objectif
                            est de continuer vers un Master dans ce même domaine. Je suis convaincu que cette
                            progression me permettra d&apos;approfondir mes compétences et de me préparer efficacement pour
                            une carrière dans le développement informatique.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={ImgPhotoProfil} alt="ProfileImage"
                               className="rounded-full shadow-lg w-80 h-80 object-cover"/>
                    </div>
                </div>
            </div>
        </div>

    );
}