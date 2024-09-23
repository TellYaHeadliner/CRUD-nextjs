import "@/app/globals.css";
import { useEffect, useState } from "react";


export default function Main(){
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/blogs');
            const data = await response.json();
            setBlogs(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

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
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="border border-gray-300 p-2">{blog.id}</td>
              <td className="border border-gray-300 p-2">{blog.title}</td>
              <td className="border border-gray-300 p-2">{blog.author}</td>
              <td className="border border-gray-300 p-2">{blog.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}