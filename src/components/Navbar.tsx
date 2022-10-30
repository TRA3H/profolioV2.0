import Link from "next/link"

import SongActivity from "./SongActivity"

const Navbar = () => {
    return(

        //TODO: fix mobile display

        <div className="sticky top-0 z-50 mx-auto max-w-4xl space-y-8 py-2 px-5 lg:px-0 ">
        <nav className="relative w-full space-x-4 rounded-xl border 
                        border-white/10 bg-white/5 px-4 backdrop-blur-lg
                        py-6 ">
            <div className="flex items-center justify-between space-x-8">
                <div>

                    <Link href="/" className="text-lg items-center px-4" >Home</Link>
                    <Link href="contact" className="text-lg items-center px-4">Contact</Link>
                </div>
                <div className="flex justify-items-center space-x-2 text-gray-500 pr-2 overflow-hidden">
                   <SongActivity></SongActivity>
                </div>
            </div>
            
            
        </nav>
        </div>
    );

}

export default Navbar