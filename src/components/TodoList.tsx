import { PlusIcon } from "@heroicons/react/24/solid";

export default function Todo() {
  return (
    <div className="flex h-screen items-center">
      <div className="card card-custom-size mx-auto rounded-lg border border-gray-800">
        <div className="*card-header* flex flex-wrap items-center justify-between border-b border-b-gray-800 px-6 py-5">
          <h3 className="text-xl font-semibold leading-6 text-white">
            Todo List
          </h3>
          <div className="">
            <div className="border border-gray-800 font-bold text-white">
              logout
            </div>
          </div>
        </div>
        <div className="*card-body* flex gap-2 px-6 py-6">
          <textarea
            placeholder="Make a Next demo"
            className="h-10 w-full resize-none rounded-lg border-2 border-gray-700 bg-transparent px-2.5 py-1.5 text-white placeholder-gray-500 focus:border-2 focus:border-cyan-500 focus:outline-none"
          ></textarea>
          <button>
            <PlusIcon className="h-6 w-6 rounded-lg text-cyan-500 ring-2 ring-cyan-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
