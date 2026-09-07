import NameForm from "@/components/name-form";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-black gap-6">
        <div className="flex flex-col items-center gap-6 text-center sm:text-center">
          <Image 
            src="/fantasy-name-generator-logo.jpg"
            width={360}
            height={360}
            alt="Fantasy Name Generator"
          />
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Create a legendary title for your fantasy character inspired by your
            own first name.
          </p>
        </div>
        <NameForm />
      </main>
    </div>
  );
}
