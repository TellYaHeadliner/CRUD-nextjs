import "@/app/globals.css";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-center py-4">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Copyright by Bùi Bảo Lâm
            </p>
        </footer>
    );
}
