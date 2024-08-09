"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "./Theme";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

// HamBurger Component Function
const HamBurger = () => {
	const { theme, switchLight, switchDark } = useContext(ThemeContext);
	//State for Managing dropdown menu Open and Close
	const [isOpen, setIsOpen] = useState(false);

	// Function to handle key presses for accessibility
	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			setIsOpen(!isOpen);
		}
	};

	return (
		<div className="pr-4 inline lg:hidden bg-white dark:bg-slate-800">
			{/* HamBurger Menu Icon*/}
			<div className="flex items-center lg:hidden gap-x-3">
				{theme === "dark" ? (
					<MdOutlineLightMode
						className="md:mt-2 cursor-pointer"
						onClick={switchLight}
						size={26}
						color={"white"}
					/>
				) : (
					<MdDarkMode
						className="cursor-pointer md:mt-2"
						onClick={switchDark}
						size={26}
					/>
				)}
				<div
					onClick={() => setIsOpen(!isOpen)}
					onKeyDown={handleKeyDown}
					role="button"
					tabIndex={0}
					aria-expanded={isOpen}
					aria-controls="hamburger-menu"
					className="relative border rounded-md cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-900 p-2 flex justify-center items-center"
				>
					<RxHamburgerMenu size={19} />
					{/* HamBurger Menu */}
					{isOpen && (
						<div
							id="hamburger-menu"
							className="absolute transition duration-200 mt-1 top-10 right-0.5 shadow-sm w-40 rounded-lg border dark:border-gray-100 h-40 flex flex-col items-center bg-white dark:bg-slate-800"
						>
							<div className="flex flex-col gap-y-2 text-md text-gray-950 dark:text-white font-medium w-full">
								<Link
									href="/about"
									className="p-2 flex justify-center w-[98%] transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-700 mt-2"
								>
									About-us
								</Link>
								<Link
									href=""
									className="p-2 flex justify-center w-[98%] transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-700"
								>
									Sign in
								</Link>
								<Link
									href=""
									className="p-2 flex justify-center w-[98%] transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-700"
								>
									Sign up
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HamBurger;
