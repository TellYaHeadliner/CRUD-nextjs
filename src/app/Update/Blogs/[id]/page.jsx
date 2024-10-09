'use client'

import "@/app/globals.css";

import { useForm } from "react-hook-form";
import { toast} from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Update({ params}){

    const router = useRouter();
    const { register, handleSubmit, setValue, formState: {errors} } = useForm();


    useEffect(() => {
        if (params) {
            const fetchBlog = async () => {
                console.log(params);
                const response = await fetch(`http://localhost:8000/blogs/${params.id}`);
                const data = await response.json();
                // Thiết lập giá trị vào form
                setValue("title", data.title);
                setValue("author", data.author);
                setValue("content", data.content);
            };

            fetchBlog();
        }
    },[params, setValue])

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:8000/blogs/${params.id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok){
                const result = await response.json();
                toast.success("Chỉnh sửa thành công");
                router.push('/')
            }
            else {
                toast.error('Có lỗi khi chèn dữ liệu');
            }
        } 
        catch (error) {
            console.error(error);
        }   
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto p-4">
            <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                    Title
                </label>
            <input
                id="title"
                {...register("title", { required: "Title is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.title && <p className="mt-2 text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
                <label htmlFor="author" className="block text-lg font-medium text-gray-700">
                    Author
                </label>
            <input
                id="title"
                {...register("author", { required: "Author is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.author && <p className="mt-2 text-red-500 text-sm">{errors.author.message}</p>}
            </div>

            <div>
                <label htmlFor="content" className="block text-lg font-medium text-gray-700">
                    Content
                </label>
            <input
                id="title"
                {...register("content", { required: "Content is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.content && <p className="mt-2 text-red-500 text-sm">{errors.content.message}</p>}
            </div>


            <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md shadow hover:bg-indigo-700 transition duration-300"
            >
            Submit
            </button>
        </form>        
    )
}