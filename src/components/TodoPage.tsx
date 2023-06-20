import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Switch } from "./switch";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="card card-custom-size mx-auto rounded-lg border border-gray-800">
        <div className="*card-header* flex flex-wrap items-center justify-between border-b border-b-gray-800 px-6 py-5">
          <h3 className="text-lg font-semibold leading-6 text-white">
            Todo List
          </h3>
          <div className="rounded-lg border border-gray-800 px-1.5 py-1.5 font-bold text-white">
            Logout
          </div>
        </div>
        <form className="*card-body* flex-col gap-2 px-6 py-6">
          <div className="flex gap-2">
            <input
              type="text"
              id="item"
              placeholder="Make a Next demo"
              className="h-9 w-full resize-none rounded-lg border border-gray-700 bg-transparent px-2.5 py-1.5 text-sm text-white placeholder-gray-500 focus:border-2 focus:border-cyan-500 focus:outline-none"
            ></input>
            <button type="submit">
              <PlusIcon className="h-6 w-6 rounded-md bg-cyan-500 text-black ring-2 ring-cyan-500" />
            </button>
          </div>
          <ul className="flex-col gap-4">
            <li className="flex items-center gap-4 pt-4 font-medium text-white">
              <label htmlFor="text1">dwyduhwijwd</label>
              <Switch />
            </li>
            <li className="flex items-center gap-4 pt-4 font-medium text-white">
              <label htmlFor="text2">diwduwijd</label>
              <Switch />
            </li>
          </ul>
        </form>
      </div>
      <footer className="*card-footer*">
        <a
          href="https://github.com/aadil10i/to-do"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
