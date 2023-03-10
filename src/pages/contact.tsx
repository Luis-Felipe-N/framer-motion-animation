import { NavBar } from "../components/NavBar";
import { motion as m } from "framer-motion";
import { container, item } from "../animations";

export function Contact() {
    return (
        <div className="py-24 px-12 lg:px-48 font-latoBold">
        <NavBar />
            <m.main
                initial={{opacity: 100, y: "100%"}} 
                animate={{opacity:1, y: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{opacity: 1}}
                className="absolute w-full h-full left-0 top-0  bg-red-400 lg:px-48 px-16 text-gray-900"
            >
                <div className="my-80 p-1 overflow-hidden">
                    <m.h1 
                        initial={{y: "100%"}}
                        animate={{y: 0}}
                        transition={{ delay: 0.5, duration: 0.5}}
                        className="text-6xl text-center lg:text-right lg:text-9x1"
                    >
                        Fale comigo
                    </m.h1>
                </div>
                <div className="flex gap-40">
                    <div className="lg:text-2xl text-base">
                        Me encontre em:
                    </div>
                    <div className="lg:text-6xl text-2xl underline">
                        <m.ul variants={container} initial="hidden" animate="show">
                            <div className="overflow-hidden">
                                <m.li variants={item} className="pb-2">Twitter</m.li>
                            </div>
                            <div className="overflow-hidden">
                                <m.li variants={item} className="pb-2">Instagram</m.li>
                            </div>
                            <div className="overflow-hidden">
                                <m.li variants={item} className="pb-2">LinkedIn</m.li>
                            </div>
                            <div className="overflow-hidden">
                                <m.li variants={item} className="pb-2">Github</m.li>
                            </div>
                        </m.ul>
                    </div>
                </div>
            </m.main>
        </div>
    )
}