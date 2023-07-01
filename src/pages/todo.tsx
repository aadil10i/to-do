/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Switch } from "@/components/switch";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/CardFooter";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Todo() {
  interface Todo {
    id: string;
    item: string;
    completed: boolean;
  }

  const { data: session } = useSession();
  const [newItem, setNewItem] = useState("");
  const [Todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // const response = await fetch("/api/todos", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ item: newItem, userId: session?.user?.id }),
    // });
    // const newTodo: Todo = (await response.json()) as Todo;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), item: newItem, completed: true },
      ];
    });

    setNewItem("");
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo): todo is Todo => todo.id !== id);
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !completed };
        } else {
          return todo;
        }
      });
    });
    console.log(Todos);
  }

  async function handleLogout() {
    try {
      await signOut({ callbackUrl: "http://localhost:3000" });
      // Other stuff to handle post logout can be here, if there's any
    } catch (error) {
      console.error("Failed to sign out: ", error);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="card card-custom-size mx-auto rounded-lg border border-gray-800">
        <div className="*card-header* flex flex-wrap items-center justify-between border-b border-b-gray-800 px-6 py-5">
          <h3 className="text-lg font-semibold leading-6 text-white">
            Todo List
          </h3>
          <button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleLogout}
            className="flex rounded-lg border border-gray-800 px-1.5 py-1.5 font-bold text-white"
          >
            {session?.user?.image && (
              <Image
                className="mr-2"
                src={session.user.image}
                alt="profile"
                width={24}
                height={24}
              />
            )}
            {session?.user?.name}
          </button>
        </div>
        <div className="*card-body* flex-col gap-2 px-6 py-6">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                id="item"
                placeholder="Make a Next demo"
                className="h-9 w-full resize-none rounded-lg border-2 border-gray-700 bg-transparent px-2.5 py-1.5 text-sm text-white placeholder-gray-500 focus:border-2 focus:border-cyan-500 focus:outline-none"
              ></input>
              <button type="submit">
                <PlusIcon className="h-6 w-6 rounded-md bg-cyan-500 text-black ring-2 ring-cyan-500" />
              </button>
            </div>
          </form>
          <ul className="flex-col gap-4">
            {Todos.map((todo) => (
              <li
                key={todo.id}
                className={`${
                  !todo.completed ? "text-gray-600 line-through" : ""
                } flex flex-grow items-center gap-4 border-b border-gray-800 pb-2 pt-4 font-medium text-white`}
              >
                <label className="flex-grow">{todo.item}</label>

                <Switch
                  onClick={() => {
                    toggleTodo(todo.id, todo.completed);
                  }}
                />
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="rounded-md border border-red-950 bg-red-950"
                >
                  <XMarkIcon className="h-5 w-5 text-red-400 " />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
