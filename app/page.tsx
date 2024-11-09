import Image from "next/image";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/*<div className="fixed top-0 left-0 right-0 bottom-0 bg-blue-400 z-10"/>*/}

            <main className="flex flex-col gap-6 row-start-2 items-center justify-center z-20">
                <Image
                    src="/logo.svg"
                    alt="humanthings logo"
                    width={500}
                    height={100}
                    priority
                />

                <div
                    className="animated-bg-1"
                    style={{
                        backgroundImage: `url('/logo.svg'`,
                    }}
                />
                <div
                    className="animated-bg-2"
                    style={{
                        backgroundImage: `url('/logo.svg'`,
                    }}
                />

                <h1 className="text-gray-500 text-center">
                    Give us a bit more time to finish what we are building.<br/>Thank you <span
                    className="text-red-500">human.</span>
                </h1>
            </main>
        </div>
    );
}
