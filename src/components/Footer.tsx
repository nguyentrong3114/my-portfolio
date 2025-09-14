import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

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
						<a href="mailto:maithoi60@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 text-gray-600 dark:text-gray-300 text-2xl transition">
							<FaEnvelope />
						</a>
						<a href="https://www.facebook.com/nguyen.trong.353207?locale=vi_VN" target="_blank" rel="noopener" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 text-2xl transition">
							<FaFacebook />
						</a>
						<a href="https://www.instagram.com/trong31_14/" target="_blank" rel="noopener" className="hover:text-pink-500 dark:hover:text-pink-400 text-gray-600 dark:text-gray-300 text-2xl transition">
							<FaInstagram />
						</a>
						<a href="https://zalo.me/0379723024" target="_blank" rel="noopener" className="hover:text-blue-400 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300 text-2xl transition">
							<SiZalo />
						</a>
					</div>
			<div className="text-sm text-gray-500 dark:text-gray-400">
				© {new Date().getFullYear()} nguyentrong3114. All rights reserved.
			</div>
		</footer>
	);
}
