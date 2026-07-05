import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const [darkMode, setDarkMode] = useState(true);
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			offset: 100,
		});
		document.documentElement.classList.add("dark");
	}, []);
	const toggleDarkMode = () => {
		const alteringMode = !darkMode;
		setDarkMode(alteringMode);
		document.documentElement.classList.toggle("dark");
	};
	return (
		<div
			className={
				darkMode
					? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
					: "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
			}
		>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
		</div>
	);
};

export default App;
