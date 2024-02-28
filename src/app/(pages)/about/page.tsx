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
                            Hey ! je suis Souvanny BOUNMY, un développeur web (fullstack)
                        </h1>
                        <p>
                            Ma passion pour l&apos;informatique, surtout le développement, m&apos;a toujours intéressé et fasciné.
                            Après plusieurs stages dans le domaine de l&apos;informatique, j&apos;ai vraiment compris que c&apos;était
                            le domaine du développement où je voulais être. Suite à ça j&apos;ai fait un bac STI2D
                            spécialisée en informatique et réseaux. Actuellement, je suis en bachelor spécialisé en
                            développement, je veux continuer mes études en mastère dans ce même domaine. Je suis
                            convaincu que cela me permettra d&apos;approfondir mes compétences et de me préparer pour une
                            carrière dans le développement informatique.
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