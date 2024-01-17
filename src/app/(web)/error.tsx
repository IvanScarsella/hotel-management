'use client'

import { btn_primary, font_heading } from "./globals";

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return (
      <div className="container mx-auto">
         <h2 className={`${font_heading} text-red-800 mb-10`}>
            Something went wrong!
         </h2>
         <button onClick={() => reset()} className={`${btn_primary}`}>
            Try Again
         </button>
      </div>
   )
}