import Link from "next/link";
import "@/app/globals.css";

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href={"/Create"}>
                                    <span className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                                        Create
                                    </span>
                                </Link>         
                                <Link href={"/Delete"}>
                                    <span className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                                        Delete
                                    </span>
                                </Link>   
                                <Link href={"/Update"}>
                                    <span className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                                        Update
                                    </span>
                                </Link>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
