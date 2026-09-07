"use client";

import { useState } from "react";
import { submitNameForm } from "@/actions/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function NameForm() {
  const [state, action, isLoading] = useActionState(submitNameForm, "");
  const [inputValue, setInputValue] = useState(""); 

  const isValid = inputValue.trim().length >= 3;

  return (
    <Form action={action}>
      <div className="flex flex-col justify-center items-center text-base font-medium gap-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First name"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:bg-black/4 border-white/[.145] md:w-39.5 text-center outline-0"
        />
        <button
          suppressHydrationWarning
          className={`flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors  md:w-39.5 ${!isValid ? "bg-amber-900 text-black hover:bg-amber-900 cursor-not-allowed" : "bg-purple-800 text-foreground hover:bg-purple-900 cursor-pointer"}`}
          disabled={!isValid || isLoading}
          type="submit"
        >
          {isLoading ? "Making magic..." : "Generate"}
        </button>
        {state && (
          <div className="flex flex-col gap-2 text-base text-center border-2 p-8 mt-6 border-purple-800 rounded-2xl">
            <p className="font-medium">Hello</p>
            <p className="text-2xl font-bold text-purple-600">{state}</p>
            <p>Now of to battle!</p>
          </div>
        )}
      </div>
    </Form>
  );
}
