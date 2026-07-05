import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
	const [activeSection, setActiveSection] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navList = [
		{ title: "Home", link: "#home" },
		{ title: "About", link: "#about" },
		{ title: "Skills", link: "#skills" },
		{ title: "Projects", link: "#projects" },
		{ title: "Contact", link: "#contact" },
	];
	const lightTheme = {
		navBg: "bg-linear-to-br from-orange-200 to-white",
		textPrimary: "text-gray-900",
		textSecondary: "text-gray-700",
		textHover: "text-orange-500",
		textActive: "text-orange-600",
		indicator: "text-orange-500 to-amber-500",
		btnBg: "from-orange-500 to-amber-500",
	};
	const darkTheme = {
		navBg: "bg-linear-to-br from-gray-700 to-black",
		textPrimary: "text-white",
		textSecondary: "text-gray-400",
		textHover: "text-orange-300",
		textActive: "text-orange-500",
		indicator: "text-orange-500 to-amber-500",
		btnBg: "from-orange-500 to-amber-500",
	};
	const theme = darkMode ? darkTheme : lightTheme;
	const handleNavListClick = (listName) => {
		setActiveSection(listName.toLowerCase());
		setIsMenuOpen(false);
	};

	return (
		<div className="flex justify-center w-full fixed z-50 mt-4">
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`flex items-center justify-center ${theme.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
			>
				<div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
					{/* logo */}
					<motion.a
						href="/"
						whileHover={{ scale: 1.05 }}
						className="flex items-center space-x-2"
					>
						<span className={`text-xl font-bold ${theme.textPrimary} `}>
							Portfolio<span className="text-orange-500">.</span>
						</span>
					</motion.a>
					{/* navigation lists */}
					<div className="hidden lg:flex items-center space-x-6">
						{navList.map((list) => (
							<a
								key={list.title}
								href={list.link}
								onClick={() => handleNavListClick(list.title)}
								className="relative"
							>
								<motion.span
									className={`font-medium transition-colors duration-300 ${
										activeSection === list.title.toLowerCase()
											? theme.textActive
											: theme.textSecondary
									} hover:text-orange-500`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{list.title}
								</motion.span>
								{activeSection === list.title.toLowerCase() && (
									<motion.div
										layoutId="navbar-indecator"
										className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${theme.indicator}`}
									></motion.div>
								)}
							</a>
						))}
					</div>
					{/* theme toggle */}
					<div className="flex items-center space-x-2">
						<motion.button
							whileHover={{ scale: 1.4 }}
							whileTap={{ scale: 0.9 }}
							onClick={toggleDarkMode}
							className={`p-2 rounded-full ${
								darkMode ? `bg-gray-700` : `bg-gray-200`
							} transition-colors`}
							aria-label={
								darkMode ? `Switch to light mode` : `Switch to dark mode`
							}
						>
							{darkMode ? (
								<Sun className="w-5 h-5 text-yellow-500"></Sun>
							) : (
								<Moon className="w-5 h-5 text-gray-500"></Moon>
							)}
						</motion.button>
						{/* hire me button */}
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${theme.btnBg} text-white shadow-md hover:shadow-lg transition-shadow`}
						>
							Hire Me
						</motion.a>
					</div>
					{/* mobile menu */}
					<div className="flex lg:hiddn items-center space-x-4 px-2">
						<motion.button
							whileTap={{ scale: 0.9 }}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`p-2 rounded-lg ${
								darkMode ? `bg-gray-700` : `bg-gray-200`
							}`}
						>
							{isMenuOpen ? (
								<X
									className={`w-5 h-5 ${
										darkMode ? `text-white` : `bg-gray-700`
									}`}
								/>
							) : (
								<Menu
									className={`w-5 h-5 ${
										darkMode ? `text-white` : `text-gray-700`
									}`}
								/>
							)}
						</motion.button>
					</div>
				</div>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className={`absolute top-full left-0 right-0 mt-2 lg:hidden
						${darkMode ? `bg-gray-900` : `bg-white`} backdrop-blur-lg rounded-xl shadow-lg border ${
							darkMode ? `border-gray-700` : `border-gray-200`
						}`}
					>
						<div className="px-4 py-3 space-y-2">
							{navList.map((list) => (
								<a
									key={list.title}
									href={list.link}
									onClick={() => handleNavListClick(list.title)}
									className="block"
								>
									<motion.div
										whileHover={{ x: 5 }}
										className={`py-3 px-4 rounded-lg text-center
									${
										activeSection === list.title.toLowerCase()
											? darkMode
												? `bg-gray-800`
												: `bg-orange-50`
											: ""
									}`}
									>
										<span
											className={`font-medium ${
												activeSection === list.title.toLowerCase()
													? `${theme.textActive} border-l-2 border-orange-600 pl-2`
													: theme.textSecondary
											} hover:${theme.textActive} hover:border-l-2 pl-2`}
										>
											{list.title}
										</span>
									</motion.div>
								</a>
							))}
							<motion.a
								href="#contact"
								onClick={() => setIsMenuOpen(false)}
								whileTap={{ scale: 0.95 }}
								className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${theme.btnBg} text-white shadow-md`}
							>
								Hire Me
							</motion.a>
						</div>
					</motion.div>
				)}
			</motion.nav>
		</div>
	);
};

export default Navbar;
