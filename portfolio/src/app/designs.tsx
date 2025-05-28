import designs from "./designs-data";

export default function Designs() {
    return (
        <main className="flex flex-col items-center justify-center gap-12">
            {Object.entries(designs).map(([key, design]) => (

                // Design Card
                <div key={key} className="w-full rounded-xl flex flex-col bg-white 2xl:flex-row 2xl:max-w-[66%]">

                    <div className="2xl:h-auto 2xl:max-w-lg flex items-center justify-center p-4 2xl:p-0">
                        {design.img && (
                            <img
                                src={design.img}
                                alt={design.title + " Design Screenshot"}
                                className="rounded-t-xl 2xl:rounded-l-xl 2xl:rounded-r-none object-cover h-full w-full"
                            />
                        )}
                    </div>

                    <div className="flex flex-col p-8 gap-4">
                        {/* title */}
                        {typeof design.title === "string" && (
                            <h3 className="text-2xl text-cyan-950">{design.title}</h3>
                        )}
                    </div>
                </div>
            ))}
        </main>
    );
}