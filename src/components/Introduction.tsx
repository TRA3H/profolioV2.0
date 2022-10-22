const Introduction = () => {
    return (
    
    <div className="container md:flex mx-auto justify-between space-x-12 space-y-12 px-2 text-white sm:px-5 items-center">
        <div className="space-y-6">
            <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl">Hey, I'm Cyrus</h1>
            <p className="font-semibold opacity-70">A 4th college student who is currently enrolled at California State University, Fullerton. 
                I am pursuing a degree in Bachelors of Science: Computer Science; 
                expecting to graduate in 2024.</p>
        </div>

        <div className="flex items-center justify-center">
            <div className="w-72 h-72 shadow-lg flex items-center justify-center align-middle drop-shadow-2xl
                             rounded-[30px] bg-gradient-to-r from-custom-blue to-custom-purple -rotate-90">
                <div className="flex justify-center items-center bg-gradient-to-r from-custom-blue to-custom-purple rounded-full 
                                 w-56 h-56 overflow-hidden">
                <img className="mx-auto rotate-90" src="me.jpg" alt="cyrus" />
                </div>
                
            
            </div>
        </div>    
    </div>
    
    )
}

export default Introduction;
