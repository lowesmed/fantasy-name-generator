import Form from "next/form";

export default function NameForm() {
  return (
    <Form action="">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-base font-medium sm:flex-row">
          <input
            type="text"
            name=""
            placeholder="Your name"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] text-center outline-0"
          />
        </div>
        <div className="flex flex-col text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="#"
            rel="noopener noreferrer"
          >
            Generate now
          </a>
        </div>
      </div>
    </Form>
  );
}
