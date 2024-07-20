"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { collectEmail } from "./action";

export default function NewsletterForm() {
  const formRef = useRef()
  const [state, action] = useFormState(collectEmail, {
    status: "",
    message: "",
  });
  if (state.status === 'success'){
    formRef.current?.reset()
  }
  return (
    <form ref={formRef} action={action} className="w-full">
      <div className="w-full">
        <input
          type="email"
          name="email"
          placeholder="Join our newsletter!"
          className="px-5 py-1 text-lg rounded-full mr-1 border-slate-300 border-2 outline-none hover:border-purple-500 focus:border-purple-500 active:border-purple-500 transition-colors w-3/4"
        />
        <input title='Sign up for our email list' type="submit" value="Sign up" className="ml-1 text-lg font-bold hover:text-purple-500 transition-colors" />{" "}
      </div>
      {state?.message && <label className={`px-5 ${state?.status === 'error' && 'text-red-500'} ${state?.status === 'success' && 'text-green-500'}`}>{state?.message}</label>}
    </form>
  );
}
