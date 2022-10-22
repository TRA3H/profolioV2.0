const Navbar = () => {
    return(
        <div className="sticky top-0 z-50 mx-auto max-w-4xl space-y-8 py-10 px-5 lg:px-0 ">
        <nav className="relative w-full space-x-4 rounded-xl border 
                        border-white/10 bg-white/5 px-4 backdrop-blur-lg
                        py-6 ">
            <div className="flex items-center justify-between space-x-8">
                <div>
                    <a href="#Home" className="nav-item items-center px-6">Home</a> 
                    <a href="#Contact" className="nav-item items-center px-6">Contact</a>
                </div>
                <div className="flex justify-items-center space-x-2 text-gray-500 pr-2">
                    <p className="nav-item ">Not Listening to Anything</p>
                </div>
            </div>
            
            
        </nav>
        </div>
    );

}

export default Navbar