import Image from "next/image";
import Link from "next/link";
import {FaInstagram} from "react-icons/fa";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
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
                        backgroundImage: `url('/background.jpg')`,
                    }}
                />
                <div
                    className="animated-bg-2"
                    style={{
                        backgroundImage: `url('/background.jpg')`,
                    }}
                />

                <h1 className="text-gray-500 text-center">
                    We are just getting started. We will be live in no time. Follow us on our social medias to stay connected.
                </h1>

                <Link href="https://instagram.com/humanthings.al" target="_blank">
                    <FaInstagram title="Instagram" size={32} className="hover:text-red-500" />
                </Link>
            </main>
        </div>
    );
}
