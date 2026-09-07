"use client";

import { submitNameForm } from "@/actions/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function NameForm() {
  const [state, action, isLoading] = useActionState(submitNameForm, "");

  return (
    <Form action={action}>
      <div className="flex flex-col justify-center items-center text-base font-medium gap-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5 text-center outline-0"
        />
        <button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
          type="submit"
        >
          {isLoading ? "Making magic..." : "Generate"}
        </button>
        {state && (
          <div className="flex flex-col gap-2 text-base text-center border-2 p-8 mt-6 border-purple-900 rounded-2xl">
            <p className="font-medium">Welome</p>
            <p className="text-2xl font-bold text-purple-800">{state}</p>
            <p>Now of to battle!</p>
          </div>
        )}
      </div>
    </Form>
  );
}
