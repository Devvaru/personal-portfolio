export default function Intro() {
    return (
        <section className="flex flex-col justify-center gap-10">
            <div className="">
                <h1 className="text-9xl font-bold">{"Hello"}</h1>
                <h2 className="text-[3.8rem] font-light text-amber-300">{"I am Devaru"}</h2>
            </div>
            <p className="w-full lg:w-1/2 xl:w-1/3">{"I'm a full stack web developer specializing in modern JavaScript frameworks, with a focus on React and front-end development. I bring designs to life through responsive, accessible interfaces built with a mobile-first approach and a strong foundation in UI/UX. With experience in custom web apps, WordPress, and Squarespace, I’m passionate about crafting seamless user experiences through clean, maintainable code."}</p>
            <a href={"mailto:devongaal@gmail.com"} target="_blank" rel="noopener noreferrer" className="py-2 px-6 bg-cyan-400 hover:bg-white text-cyan-950 rounded-full flex justify-center font-bold text-lg w-50 duration-300">{"Let's Collaborate"}</a>
        </section>
    )
}