export default function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="card card-custom-size mx-auto rounded-lg border border-gray-800">
        <div className="*card-header* flex flex-wrap items-center justify-between border-b border-gray-800 px-6 py-5">
          <h3 className="text-lg font-semibold leading-6 text-white">
            Todo List
          </h3>
          <p className="border-fill rounded-lg border bg-white p-1 font-medium leading-6">
            Login with github
          </p>
        </div>
        <div className="*card-body* flex-col px-6 py-6">
          <p className="text-md font-semibold leading-6 text-white">
            Welcome to React Todos Edge.
          </p>
          <p className="text-md mt-4 leading-6 text-white">
            A{" "}
            <a className="text-cyan-500" href="https://react.dev">
              React
            </a>{" "}
            demo hosted on{" "}
            <a className="text-cyan-500" href="https://vercel.com">
              Vercel
            </a>{" "}
            with server-side rendering on the edge and using vercel edge
            functions
          </p>
        </div>
      </div>
      <div className="*card-body* "></div>
    </div>
  );
}
