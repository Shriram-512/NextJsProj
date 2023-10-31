'use client';

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <div className="p-8">
      <form>
        <div className="bg-white p-4 border rounded-lg">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-black border-2 focus:outline-none rounded-lg bg-slate-50 placeholder-gray-900" placeholder="Article name or keywords..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:bg-gray-900 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:bg-gray-900">Search</button>
          </div>
        </div>
      </form>
    </div>

  )
}

Home.requireAuth = true
