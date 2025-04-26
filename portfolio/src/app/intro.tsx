export default function Intro() {
    return (
        <section className="flex flex-col justify-center gap-10">
            <h1 className="text-5xl">{"Hi, I'm Devvaru"}</h1>
            <p className="w-full lg:w-1/2 xl:w-1/3">{"I'm a full stack web developer specializing in modern JavaScript frameworks, with a strong focus on React and crafting high-quality front-end experiences. I have a deep understanding of UI/UX principles and bring designs to life through scalable, accessible, and responsive interfaces with a mobile-first approach. My experience spans custom web applications, CMS platforms like WordPress and Squarespace, and performance-optimized front-end solutions. I’m passionate about building seamless user experiences through clean, maintainable code."}</p>
            <a href={"mailto:devongaal@gmail.com"} target="_blank" rel="noopener noreferrer" className="py-2 px-6 bg-cyan-600 hover:bg-cyan-800 text-white rounded-full flex justify-center font-semibold w-50 duration-300">{"Let's Collaborate"}</a>
        </section>
    )
}