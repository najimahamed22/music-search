"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?movie=${input}`);
    setInput("");
  };

  return (
    <div className="bg-sky-500 py-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="px-3 inline-flex gap-4">
          <Image
            className="rounded-md"
            src="https://thumbnail.imgbin.com/4/17/4/imgbin-movie-logo-KgwGhgz1EHCssWgBGqfs9YXjA_t.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
          <Link href="/">
            <div className="text-4xl font-bold text-white">Home</div>
          </Link>
        </div>

        <form onSubmit={searchMovie}>
          <div className="space-x-4 px-4">
            <input
              className="bg-secondary px-4 py-2 outline-none placeholder:text-textColor"
              type="text"
              value={input}
              placeholder="Search a Movie..."
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="submit"
              className="bg-secondary font-medium py-2 px-4 hover:text-sky-500">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
