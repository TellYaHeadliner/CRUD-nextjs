'use client'
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/navigation";

import "@/app/globals.css";



export default function Main(){
  const router = useRouter();

  const [blog , setBlog] = useState(null);
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher);
  if (error) {
    return <h1>Có lỗi xảy ra khi loading :(((((((</h1>
  }

  if (isLoading){
    return <h1>Địt mẹ tao đang loading</h1>
  }
   
    return (
        <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Author</th>
            <th className="border border-gray-300 p-2">Content</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.title}</td>
              <td className="border border-gray-300 p-2">{item.author}</td>
              <td className="border border-gray-300 p-2">{item.content}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex space-x-4">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ () => {
                    router.push(`/Update/Blogs/${item.id}`)
                  }
                  }>
                    Edit
                  </button>
                </div>
              </td>   
            </tr>
          ))}
        </tbody>
      </table>
    )
}