const About = () => {
    return(

    <div className="container md:flex mx-auto justify-between space-x-12 space-y-12 px-2 text-white sm:px-5 items-center">
        <div className="space-y-6">
            <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl pt-12">About Me</h1>
            <p className="font-semibold opacity-70">I am a determined software engineer who’s currently focusing on web applications, mobile apps and machine learning.
               I currently use React with its frameworks: Next.js and Vue.js.</p>
            <p className="font-semibold opacity-70">Programming aside, I REALLY enjoy doing spontaneous activies such as going to 
               bars, hiking, paddleboarding, playing pool, food & boba runs.</p>
            <p className="font-semibold opacity-70">ALSO I love joining new communities! Communities I am heavily involved in: 
               Association of Computer Machinery and Vietmanese Student Association.</p>
        </div>
    </div>
    
    )
}

export default About;