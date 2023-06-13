export default function Todo() {
  return (
    <div className="flex h-screen items-center">
      <div className="card mx-auto w-1/3 rounded-lg border border-gray-800">
        <div className="card-header flex border-b border-b-gray-800 px-6 py-6">
          <h3 className="text-xl font-semibold leading-6 text-white">
            Todo List
          </h3>
          <div className="pl-96">
            <div className="border border-gray-800 font-bold text-white">
              logout
            </div>
          </div>
        </div>
        <div className="card-body flex px-6 py-6">
          <textarea
            placeholder="Make a Next demo"
            className="h-10 w-full resize-none rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-white placeholder-gray-500"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
