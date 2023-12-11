import React from "react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-string w-[4.563rem] h-[2.625rem] flex items-center justify-center border border-primary dark:text-white dark:border-white"
      disabled={pending}
    >
      {pending ? (
        <div className="btn btn-string animate-spin h-[1rem] w-[1rem] rounded-full border-b-2 border-secondary"></div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
