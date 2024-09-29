'use client'
import { useEffect, useState } from "react";
import useSWR from "swr";


import "@/app/globals.css";


export default function Main(){
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
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td className="border border-gray-300 p-2">{data.id}</td>
              <td className="border border-gray-300 p-2">{data.title}</td>
              <td className="border border-gray-300 p-2">{data.author}</td>
              <td className="border border-gray-300 p-2">{data.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}