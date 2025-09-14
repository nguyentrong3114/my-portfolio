import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full py-8 px-4 flex flex-col md:flex-row items-center justify-between bg-white/80 dark:bg-black/40 border-t border-gray-200 dark:border-gray-700 mt-16 rounded-b-2xl">
			<div className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 md:mb-0">
				nguyentrong3114
			</div>
			<div className="flex gap-6 mb-2 md:mb-0">
				<a href="https://github.com/nguyentrong3114" target="_blank" rel="noopener" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300 text-2xl transition">
					<FaGithub />
				</a>
				<a href="https://linkedin.com/in/nguyentrong3114" target="_blank" rel="noopener" className="hover:text-blue-700 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 text-2xl transition">
					<FaLinkedin />
				</a>
				<a href="mailto:nguyentrong3114@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 text-gray-600 dark:text-gray-300 text-2xl transition">
					<FaEnvelope />
				</a>
			</div>
			<div className="text-sm text-gray-500 dark:text-gray-400">
				© {new Date().getFullYear()} nguyentrong3114. All rights reserved.
			</div>
		</footer>
	);
}
