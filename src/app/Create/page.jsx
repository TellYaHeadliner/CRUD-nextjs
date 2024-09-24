'use client'
import "@/app/globals.css";
import { useForm } from "react-hook-form";

export default function Create(){
    const { register, handleSubmit } = useForm('fff')
    return (
        <div>
        <Headers
            description="Hãy thêm bài viết của bạn vào trong đây">
        </Headers>

        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input {...register("title")} placeholder="Title"/>
        </form>
        </div>
    )
}