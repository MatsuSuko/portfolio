import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Quicksand} from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


/*const inter = Inter({ subsets: ['latin'] })*/

const quicksand = Quicksand({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Portfolio (Souvanny Bounmy)',
    description: 'Create by Souvanny Bounmy',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={quicksand.className}>

        <div className="flex flex-col min-h-screen">
            <div className="sticky w-full">
                <Navbar/>
            </div>
            <main className="flex flex-grow">
                {children}
            </main>
            <div className="flex-none w-full">
                <Footer/>
            </div>
        </div>


        {/*<body className="flex font-sans w-full h-screen">
      <div className="bg-white rounded shadow-md">
          {children}
      </div>*/}
        </body>
        </html>
    )
}
