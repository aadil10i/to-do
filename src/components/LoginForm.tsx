/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from "./CardFooter";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginForm() {
  function handleLogin() {
    signIn("discord")
      .then((result) => {
        if (result?.error) {
          console.log(result.error);
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="card card-custom-size mx-auto rounded-lg border border-gray-800">
        <div className="*card-header* flex flex-wrap items-center justify-between border-b border-gray-800 px-6 py-5">
          <h3 className="text-lg font-semibold leading-6 text-white">
            Todo List
          </h3>
          <a href="/api/auth/signin/discord">
            <button
              onClick={handleLogin}
              className="border-fill flex rounded-lg border bg-white p-1 text-sm font-medium leading-6"
            >
              <Image
                className="mr-2"
                src="/brand-discord.svg"
                alt="discord"
                width={24}
                height={24}
              />
              Login with discord
            </button>
          </a>
        </div>
        <div className="*card-body* flex-col px-6 py-6">
          <p className="text-md font-semibold leading-6 text-white">
            Welcome to React Todos.
          </p>
          <p className="text-md mt-4 border-b border-gray-700 pb-4 leading-6 text-white">
            A{" "}
            <a className="text-cyan-500" href="https://react.dev">
              React
            </a>{" "}
            demo hosted on{" "}
            <a className="text-cyan-500" href="https://vercel.com">
              Vercel
            </a>{" "}
          </p>
          <p className="pt-2 text-sm font-light italic text-gray-200 dark:text-gray-300">
            No personal informations regarding your Discord account are stored
            in database. We store only the todos created linked with your
            Discord ID.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
