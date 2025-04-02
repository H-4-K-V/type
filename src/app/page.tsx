import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import lineImage from '../assets/line.svg';
import leaveImage from '../assets/leave.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-5xl h-dvh m-auto flex flex-col">
      <header className="flex relative">
        <a
          href="https://github.com/H-4-K-V"
          className="absolute top-10 left-10"
          target="_blank"
        >
          <Github size={24} color="#27272a" />
        </a>
        <a
          href="https://www.linkedin.com/in/hk-%E2%80%8E-5976a425a/"
          className="absolute top-10 left-[84px]"
          target="_blank"
        >
          <Linkedin size={24} color="#27272a" />
        </a>
      </header>

      <section className="relative flex flex-col mt-36 flex-grow">
        <h1 className="flex items-center justify-center text-5xl font-semibold text-zinc-800">
          Type.
        </h1>

        <Image src={lineImage} alt="Hand draw line" className="mx-auto mt-36" />

        <div className="flex flex-col justify-between mt-auto">
          <div className="flex justify-between">
            <Image src={leaveImage} alt="Hand draw leave" unoptimized />
            <Link href="/editor" className="my-auto">
              <button className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all bg-zinc-800 p-3 rounded-sm text-slate-100 h-fit ">
                Use Now <ArrowUpRight color="#f1f5f9" />
              </button>
            </Link>
            <Image
              src={leaveImage}
              alt="Hand draw leave"
              className="scale-x-[-1]"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
