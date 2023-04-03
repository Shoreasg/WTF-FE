"use client";
import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="bg-background-white border-light-gray-400 shadow-sm border-b">
      <div className="flex flex-row justify-between px-6 h-[75px] sm:px-6 lg:px-[100px]">
        <div className="flex items-center">
          <img
            className="block h-12 w-auto lg:hidden"
            src="/WTF_Logo.png"
            alt="WTF_Logo"
          />
          <img
            className="hidden h-12 w-auto lg:block"
            src="/WTF_Logo_WithText.png"
            alt="WTF_Logo_WithText"
          />
        </div>
        <div className="hidden lg:flex flex-col justify-center w-3/5 h-full">
          <label htmlFor="search" className="sr-only text-light-gray-200">
            Search Collections
          </label>
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <input
              id="search"
              className="block w-full h-[48px] rounded-xl border-0 bg-light-gray-100 py-1.5 px-4 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search"
              type="search"
              name="search"
            />
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-6 w-6 stroke-2 text-light-gray-200"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center lg:flex lg:justify-center lg:items-center w-16">
          <MoonIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
          <MagnifyingGlassIcon
            className="lg:hidden h-6 w-6 stroke-2"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
