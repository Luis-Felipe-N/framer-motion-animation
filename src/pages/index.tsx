import { NavBar } from "../components/NavBar";
import { motion as  m } from 'framer-motion'

export function Home() {
    return (
        <div>
            <div className="py-24 px-12 lg:px-48">
                <NavBar />
                <m.div 
                    initial={{opacity: 100, y: "100%"}} 
                    animate={{opacity:1, y: "0%"}}
                    transition={{duration: 0.75, ease: "easeOut"}}
                    exit={{opacity: 1}}
                    className="absolute w-full h-full left-0 top-0  bg-orange-100 lg:px-48 px-16 text-gray-900"
                >
                    <main>
                        <div className="my-96 p-1">
                            <h1 className="text-6xl text-center lg:text-right lg:text-9x1">
                                Luis DEV
                            </h1>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h2>Design</h2>
                                <h2>Empresa</h2>
                                <h2>2023</h2>
                            </div>
                            <div>
                                <h3>sdasdasdasda</h3>
                                <h3>sfadpsda apsdmapkdapsmca cascasca</h3>
                            </div>
                        </div>
                    </main>

                </m.div>
            </div>
        </div>
    )
}