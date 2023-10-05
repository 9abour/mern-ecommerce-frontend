import React from "react";
import { IPopularCategoryCard } from "./types";
import Image from "next/image";

const PopularCategoryCard = ({
	name,
	image,
	bg,
	customStyles,
	fullHeight,
}: IPopularCategoryCard) => {
	return (
		<div
			className={`relative w-full p-4 lg:p-6 rounded-[22.5px] lg:rounded-[45px] overflow-hidden h-full min-h-[150px] lg:min-h-[250px] ${
				customStyles ? customStyles : ""
			} ${bg}`}
		>
			<div className="relative w-fit flex flex-col items-center text-primary z-10">
				<span
					className={`w-fit bg-[#ffffff] drop-shadow text-xs lg:text-2xl font-bold rounded-[45px] py-1 px-4`}
				>
					03
				</span>
				<p className="mt-1 md:mt-2 text-[10px] lg:text-sm text-center font-bold text-[#ffffff] drop-shadow">
					PRODUCTS
				</p>
			</div>

			<div
				className={`absolute right-0 bottom-0 sm:bottom-8 sm:top-4 w-3/4 h-4/6 md:w-2/4 md:h-2/4 z-10 ${
					fullHeight &&
					"!w-full !h-fit !top-[50%] !translate-y-[-50%] [&>img]:w-full"
				}`}
			>
				<Image
					src={image}
					width={250}
					height={250}
					alt=""
					className={`object-cover drop-shadow-2xl`}
				/>
			</div>

			<h2 className="absolute bottom-3 lg:bottom-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-white z-10">
				{name}
			</h2>

			<div
				className={`absolute w-[150px] sm:w-[200px] lg:w-[250px] right-[-50px] top-[-60px] z-0 ${
					fullHeight ? "!w-full !h-fit !top-[50%] !translate-y-[-50%]" : "w-2/4"
				}`}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
					<circle
						cx="161.24"
						cy="137.91"
						r="114.37"
						fill="rgba(248, 117, 55, 1)"
					></circle>
					<g fill="#fff">
						<path d="M268.09 156.12c-.05 1.15.78.74.94.91-.23-1.94-1.15-.86-.94-.91z"></path>
						<path d="M264.64 137.47L265.03 137.75 263.72 135.17 264.64 137.47z"></path>
						<path d="M260.65 120.42c-.92 2 2.04 6.01 2.17 9.21l-.2.57 1.44 1.13c-.54-1.83-1.19-3.93-1.9-5.85-.72-1.92-1.31-3.72-1.51-5.06zM260.36 110.48c-.3.76-1.2-1.75.66 2.14-.02-.22-.01-.29-.02-.43-.15-.36-.34-.85-.64-1.71z"></path>
						<path d="M261 112.19c.73 1.75-.02-1.32 0 0zM257.31 104.28l1.48 2.07c.09-.61-.77-2.67-.21-2.02-1.31-2.23-1.38-1.6-1.27-.05zM255.37 102.6c.26.35.51.7.75 1.06.03-.26-.06-.6-.75-1.06zM257.64 105.96l-1.52-2.29c-.06.43-.47.65.66 1.07-.47-.02.11.29.86 1.22zM258.07 107.45c.31 1.38.76 3.12-.63 1.03 1 2.12 1.61 2.96 1.79 2.7.15-.24-.09-1.62-1.16-3.73zM258.96 120.02c.06.61.13 1.22.14 1.84l.88 1.36c-.22-.34-.36-1.2-.5-1.95-.15-.75-.33-1.37-.52-1.25zM250.54 90.29c-.34.03-.23 1.14-.47 1.49.44.45.84.92 1.24 1.39-.27-.94-1.09-2.54-.77-2.88z"></path>
						<path d="M250.08 91.78l-1.91-2.02c1.26 2.08 1.71 2.33 1.91 2.02zM253.74 102.91c1.03 1.13 1.9 2.36 2.87 3.55-1.07-1.46-2.11-2.92-3.27-4.31l.4.75zM244.62 81.56c.5.28.99.57 1.48.86l-1.24-.82-1.28-.78 1.04.74zM240.16 76.16c1.21.51-.29-1.84.79-1.14-1.34-1.38-2.77-2.31-4.09-3.08 1.23.98 2.26 2.3 3.3 4.22zM234.69 70.61c.63.46 1.37.87 2.17 1.33-.67-.51-1.37-.96-2.17-1.33zM245.7 85.82c.03-.28.19-.88-.54-2.26l-.07 1.38c.19.27.4.57.61.88zM245.08 84.99v-.05c-.66-.96-1.11-1.63-1.31-1.92.16.25.56.84 1.31 1.96zM245.85 86.05c-.06-.08-.1-.14-.15-.22 0 .13 0 .2.15.22zM251.11 96.31c-1.21-1.15-3.28-3.72-2.33-.6 1.07.69.52-1.11 2.33.6zM245.74 87.73c.5.82.94 1.68 1.41 2.51.16-.17.15-.79.78-.25-.73-.76-1.43-1.53-2.19-2.26z"></path>
						<path d="M244.7 86.74L245.74 87.73 245.18 86.82 244.7 86.74z"></path>
						<path d="M237.47 74.83c-.55-.35-1.06-.78-1.55-1.26-.51-.47-1.04-.97-1.59-1.52 1.04 1.29 2.09 2.65 3.15 3.88.35 0 1.19.23 0-1.1zM241.24 79.72c-.07-.06-.15-.13-.21-.19.05.18.12.3.21.19zM223.28 61.61c.03.1.06.18.08.28.05-.03.09-.05.14-.08l-.22-.2zM237.53 76.25c.69 1.05 1.33 1.47 2 1.84a39.28 39.28 0 01-2.06-2.15c-.16 0-.23.04.06.31zM231.41 67.83c.35.57.77 1.2 1.2 1.86-.23-.66-.87-1.87-1.2-1.86zM240.96 79.05l.15.12c-.11-.44-.15-.34-.15-.12zM240.96 79.05c-.49-.43-.97-.69-1.43-.97.52.55 1.03 1.05 1.5 1.45-.05-.16-.07-.34-.08-.48z"></path>
						<path d="M216.32 63.08c.32-.25 1.22-.03 2.24.54.51.29 1.05.66 1.56 1.12.49.48.95 1.03 1.33 1.63 2.41 1.3 2.83-1.78 1.92-4.49-.3.22-.46.41-2.99-.97.57.9 4.14 4.79 1.89 3.79-1.52-1.07-2.08-1.57-2.38-2.03-.3-.46-.35-.85-.93-1.57.3.86-.85.41-2.1-.03-1.23-.47-2.63-.83-2.73-.02.98.46 1.9 1 2.85 1.52-.09.21-1.22-.21-.65.5zM227.41 65.53l.92.74c-.86-1.04-1.38-1.9-2.32-3.53-1.74-1-2.24-1.04-2.51-.92 1.43 1.3 2.9 2.56 4.28 3.9l-.37-.19zM232.12 69.94c-1.23-.09-3.54-1.71-2.94.12 2.46 2.34 2.17 1.19 3.87 2.4-3.97-3.85 1.45.82-.97-2.42.86.69 1.57 1.37 2.24 2.02-.62-.8-1.19-1.59-1.71-2.36.02.05.03.09.05.13l.02.02h-.01c.09.25.1.35-.05.11-.02 0-.07-.05-.09-.07-.11.06-.26.06-.41.05-.99-1.29-.02-.34.41-.05.04-.02.1-.01.14-.04v-.02c-1.39-1.25-2.9-2.37-4.34-3.56.76.91 1.89 1.87 3.79 3.67zM245.71 94.17c-.03-.18.03-.21.08-.25-.28-.24-.41-.31-.08.25z"></path>
						<path d="M244.95 92.03c.31.27.78.36 1.4 1.48.38 1.07-.35.21-.56.41.61.52 1.96 1.97 1.03-.31l-.31-.26c-.92-1.99-1.56-4.98-1.26-4.72-.29.98-.45 1.76-.3 3.4zM238.9 80.74c-1.03-1.13-2.15-2.17-3.25-3.22l.94 2.23.27-.38c1.51 2.1 1.56 1.34 2.04 1.37zM223.15 60.94l1.05-.29c-.95-.28-1.95-.47-2.91-.7l1.86.99zM218.32 57.27l.65-.5c-.52-.2-1.06-.37-1.59-.56l.93 1.05zM45.15 215.45l.82.98c-.36-.48-.61-.77-.82-.98zM40.85 207.39l-.45-.03c.39.28.61.37.45.03zM78.37 51.24c-2.06.44-4.6.71-3.9 1.32l1 .39c1.09-.88 2.04-1.38 2.91-1.71zM26.92 133.57c.12-.16.24-.33.36-.5-.19-.51-.36-1-.52-1.43.06.58.07 1.23.17 1.93zM30.21 135.56l-.98 2.31c.29-.51.61-1.26.98-2.31zM79.51 250.85c.56.04 1.12.08 1.7.09-1.88-1.26-1.3-.35-1.7-.09zM161.5 34.13c-1.66-.55-3-.87-4.2-1.06 2.01.76 3.55 1.71 4.2 1.06zM35.29 216.78c.55.65.88.87 1.04.75-.56-.67-.94-1.01-1.04-.75zM152.34 32.65c.3.11.59.18.89.27 1.26-.03 2.55-.11 4.07.14-1.48-.56-3.24-.87-4.96-.41zM238.73 221.05c.11-.09.2-.21.31-.29-.08-.1-.18.05-.31.29zM265.93 173.45c-.02.56-.13 1.46-.23 2.32.11-.41.2-1.1.23-2.32zM197.65 44.33c1.19.51.23 0 0 0zM201.6 50.19c-.28-.04-.52-.02-.65.14.19-.14.41-.17.65-.14zM139.72 37.84h-.11c.37.16.31.13.11 0zM199.21 45.55c-.38-.31-.84-.65-1.35-.98.21.18.62.48 1.35.98zM199.16 45.07c.38.23.68.41.97.59.21-.05.12-.2-.97-.59zM195.99 43.63c.68.29 1.29.61 1.86.94-.21-.16-.28-.25-.21-.24-.35-.15-.84-.35-1.66-.7zM159.15 272.79c.08.02.18.02.27.05 1.16-.51.64-.39-.27-.05zM59.25 78.55s.04-.08.06-.13c-.05.03-.1.08-.14.11l.08.02zM56.89 82.17c.38-2.07 1.14-2.81 2.27-3.64-.93-.22-1.89-.45-2.82-.65.17 1.45.35 2.88.55 4.28z"></path>
						<path d="M58.22 232.93l-1.36-2.75c3.31 1.87 4.64 4.05 3.66 1.26-.57.38-1.34.03-2.21-.67-.86-.71-1.86-1.74-2.74-2.87-.91-1.11-1.82-2.21-2.66-2.96-.8-.78-1.53-1.2-2.14-.89l-.67-1.93c.3.47.49.45.79.92-1.14-3.82-3.24-1.21-5.63-5.61-.73-1.59-.96-2.84-.1-1.98l-2.5-3c-.5-1 .04-.98.55 0-1.02-1.66-1.92-3.4-2.9-5.1h.09c-.77-.54-2.12-2.02-2.77-2.76-.26-1.53.57.57.72.08-.64-.9-1.32-1.8-1.93-2.73.08-.76.53-.57 1.05.07.55.62 1.19 1.69 1.61 2.73.61-1.94.18-2.46-.55-3.35-.68-.9-1.7-2.18-2.12-5.5.44.92.95 1.81 1.42 2.71.37-1.2.16-2.26-.07-3.5-.24-1.24-.6-2.64-.69-4.38-.23.87-.1 7.25-1.86 4.16-.12-1.01-.46-2.26-1.56-3.91.92-.3.19-2.01-.5-4.22l1.28-.18c-.53-1.14-.9-1.63-1.27-2-.37-.37-.74-.6-1.19-1.26-.51-2.75.33-3.51 1.05-4.31-.57-4.39-1.02 3.32-2.18-1.82-.04-.94-.14-1.79-.28-2.61-.11-.83-.24-1.63-.43-2.45-.37-1.64-.96-3.35-1.47-5.55.24-2.64.81.39 1.11-.57l-1.19-2.23c-.02-.57.31-.4.47-.32-.5-1.93-1.3-.09-1.73-3.18-.7-.4-.28-2.02.24-3.98.56-1.96 1.02-4.26.36-6.21.43-.92.75.5 1.26.24-.33-2.62-.43-3.76-.59-4.79-.15-1.03-.29-1.93-.72-4.17.43-1.19.85-2.37 1.37-3.52-1.43 2.51-1.94-1.06-2.31-4.3-.63.88-1.18 1.64-1.47 2.16.06-1.68.12-3.37.31-5.04.34-.55.66.05.99.95-.03-.35-.06-.69-.09-.95.86-1.63 1.37-.55 1.79.82-.39.53-.79 1.05-1.17 1.56.55 1.36 1.2 2.62 1.98 2.51-.09-.34-.11-.96-.06-1.63.15.35.3.58.45.46.17-.13-.05-.69-.18-1.53l1.64-.77-.49-.38c.76-1.98 1.5-3.95 2.4-5.86-.04-1.17-.13-2.33-.21-3.52-.03-1.18-.06-2.39-.04-3.69.01-.65.04-1.32.09-2.01.06-.69.17-1.4.3-2.14.28-1.47.58-3.11 1.21-4.84.21 2.07 1.41 1.02 2.51 1.61-1.01.63-1.36 2.01-1.71 3.6-.17.8-.34 1.65-.53 2.53-.17.88-.4 1.77-.76 2.63.75-1.79 1.17-1.19 1.21-.66.28-2.22.78-4.37 1.21-6.59.88.52 1.2-1.02 2.32-2.4-1.18.19-.98-1.07-.41-2.72.14-.41.31-.85.48-1.29.19-.44.39-.88.59-1.31.38-.87.73-1.7.9-2.38.67.17.99 1.06-.65 3.9 1.5-1.27 1.5-2.56 1.49-3.89-.04-1.33 0-2.65 1.45-3.89-.39.71-.7 1.04-.56 1.48.21-.96.99-2.39 1.72-3.41s1.46-1.6 1.41-1l-.42.68c.77-1.09 1.7-2.49 2.65-3.99.98-1.49 2.05-3.04 2.96-4.54 1.92-2.92 3.37-5.52 2.99-6.37.2.1 1.11 1.84 1.2 2.31.55-3.61 1.22-7.34 2.17-11.02.48 1.62 5.19 1.71 2.75 5.47.51-.39 1.08-.82 1.7-1.44.63-.62 1.28-1.45 2.08-2.53-.77.43-3.05 0-2.29-.92 3.52-1.08 2.23-.99 6.12-2.65-1.19.61-1.64-2.03 0-3.35-.02.47 1.6 1.6 1.2 2.27l1.2-2.53c.41-.85.86-1.64 1.3-2.48-.76 1.11 1.02 1.62 2.3 1.43-.34-.01.53-.68 1.59-1.47 1.09-.77 2.41-1.6 2.89-2.09l-2.06.82c2.45-1.51 3.11-3.03 3.89-4.46.38-.73.76-1.46 1.35-2.21.6-.74 1.4-1.53 2.7-2.21-.39.76-.02 3.31 2.64 2.11.3-.81.85-2.81 1.99-4.91 1.14-2.07 2.75-4.49 5.02-5.94l1.2.18c1.13-.78 2.26-1.59 3.44-2.3-.88 1.23-2.52 3.5-4.26 5.7-.88 1.08-1.72 2.29-2.54 3.33-.81 1.06-1.58 1.99-2.22 2.74 2.14-.53.9.41 3.71-1.1 1.27.04-1.12 1.63-1.93 2.08 2.25-1 4.47-2.03 6.78-2.87-.43-.54.72-1.43 1.9-2.31 1.2-.82 2.44-1.6 2.1-2.07-2.38 1.37-4.62 2.99-6.87 4.49-.44-.54.21-1.88 1.63-3.35.71-.72 1.6-1.53 2.66-2.19 1.06-.66 2.27-1.25 3.55-1.69 1.46 0-.11 2.61.17 2.99.24-.33 1.31-1.05 2.45-1.54 1.13-.51 2.27-.92 2.55-.84l-1.89 1.4c1.47-.23 2.46-1.04 3.57-1.78 1.11-.73 2.37-1.31 4.24-1.19 1.2-.29 3.94.77 3.96-.05-2.27-1.05-3.91-5.54-2.81-6.98.23 0 1.98-.03 3.83 0 .93 0 1.89.06 2.73.17.83.09 1.52.2 1.91.32 2.23.82-2.53 3.36-.61 4.07 0-.37 1.03-1.02 1.46-1.24 1.33.08-.33 1.22 2.4.56.26-1.42 5.69-.61 1.15-1.31 1.35-.37 2.09-.39 2.89-.38.8.02 1.66.03 3.28-.1-.55-.4.1-1.2 1.27-1.98 1.17-.76 2.84-1.58 4.26-1.77-.15.35.5.79.81.98 1.44 0 2.72.02 3.91.07 1.19.09 2.28.22 3.36.33 1.08.11 2.14.22 3.27.33 1.13.15 2.32.28 3.65.38.47.36 2.99.98 1.84 1.46.78-.15 1.53-.52 3.16-.34 2.99 1.57-3.64-.28-1.42 1.43.29-.74 4.32-.63 6.7-.63-.25-.65-1.57-1-3.15-1.04-1.57-.04-3.36.1-4.55.2.08-.84 1.19-1.57 3.02-2.09.91-.25 2.01-.5 3.24-.6 1.22-.09 2.59-.11 4.04-.04 2.3.18 2.71.63 2.67.9-.04.29-.54.5-.13.47 2.06.55 3.57.75 4.8.78 1.21.09 2.14 0 3.01-.07.88-.07 1.71-.13 2.74.03 1.03.16 2.22.62 3.82 1.48 2.34 1.93-.59 2.06-.24 3-1.8-.39-3.07-1.02-4.21-1.6-1.15-.55-2.15-1.11-3.36-1.43l2.81 1.33c-1.23.02-3.64-.38-4.84-1.04.5.39 1.6.84 3.06 1.34.73.23 1.55.5 2.43.78.87.31 1.8.63 2.76.97.96.34 1.96.66 2.94 1.04.97.41 1.94.82 2.89 1.21 1.9.78 3.63 1.71 5 2.58 1.19.14 3.17.63 2.5-.15l-1.94-.71c-1.38-1.58 4.06.52 1.84-.93 1.42.27 2.89.66 4.47 1.16.79.26 1.59.57 2.41.96.8.42 1.6.92 2.4 1.52l.03 1.43c.11-.35-1.87-1.92-3.02-2.14.85.16 1.96 1.29 3.14 2.29.59.5 1.2.97 1.81 1.3.59.35 1.19.54 1.79.44-.63-.73-1.24-1.5-1.91-2.18 1.39.43 2.95.93 4.57 1.53 1.63.59 3.21 1.43 4.55 2.63-.63-1.93-.73-.37-2.03-2.99.89 2.65-7.69-5-5.68-1.53-.69-1.36-1.59-2.07-2.58-2.81-1-.74-2.08-1.52-3.3-2.9-.09.41.72 1.24-1.87-.31-.17.04-.53.03-.75.02-.08-.05-.1-.07-.17-.12.05.04.08.08.13.12-.14 0-.16 0 .05.04.56.48.98.94 1.08 1.24-.88.08-2.35-.46-3.83-.97-1.5-.49-2.98-1.04-3.8-1.15-1.53-.9.86-.12.15-.91-.82-.12-1.64-.21-2.48-.27.14-.91-3.84-3.12.27-2.06l-3.51-1.43c-1.92-1.24-4.8-2.41-6.72-2.62-1.68-.68-4.62-.28-2.93-.53-.98-.18-1.95-.37-2.93-.53l-2.95-.4v-.23c-2.83-.78-5.88-.86-8.96-1.24-3.11-.2-6.25-.69-9.53-1.69-.99.04-2 .08-3.16.07-1.17.04-2.49 0-4.14-.16l-.63-.79c-1.27.07-3.17-.05-4.91-.14-1.73-.08-3.29-.12-3.81.36-.71-.47-1.85-.68-3.22-.72-.69-.02-1.43 0-2.21.05-.78.06-1.59.19-2.41.32-1.64.28-3.34.54-4.88.89-1.55.34-2.96.63-4.09.74l.03 1.03c-1.52.21-2.97.68-4.5 1.13-.76.24-1.55.49-2.36.77-.81.29-1.64.64-2.53 1l.46.8c-1.46.81-3.52 1.16-5.78 1.72-1.14.26-2.34.52-3.57.82-1.21.34-2.43.76-3.62 1.25.2-.45 1.46-.85 2.39-.99-1.61.09-3.16.53-4.64 1.14-1.47.65-2.85 1.52-4.21 2.37-1.37.83-2.65 1.79-3.96 2.56s-2.66 1.37-4.03 1.77c-1.05.98-1.97 1.38-2.94 1.68.11-.07.2-.14.28-.21-.13.06-.31.17-.5.28-.62.17-1.25.35-1.9.61.61-.13 1.17-.29 1.64-.45-.92.55-2.22 1.56-3.44 2.6l-1.1-.44c-.1.08-.19.14-.3.22-1.53.56-.81 1.06.3 1.21-.6.55-1.07 1.16-1.4 1.67-.96-.27-1.74.44-2.56 1.17-.41.37-.84.74-1.31 1-.46.27-.97.45-1.56.38-.18.65-1.66 2.01-3.04 3.43-1.32 1.49-2.54 3.04-2.29 3.95-.19-.13-.61.09.02-.47-1.47.98-2.87 2.07-3.67 3.5l-1.39-.37-.82 1.92-.74 1.96c-2.13 1.16-3.14 1.58-2.21-.76-.71 1.27-1.24 2.13-1.65 2.79-.4.67-.7 1.13-.99 1.56-.57.87-1.1 1.65-2.06 3.92l-.47-.68c-1.03 1.36-1.87 4.14-3.02 4.54-.87.53-1.98 1.77-3.29 3.42-.67.81-1.33 1.77-2.01 2.81-.68 1.04-1.41 2.14-2.15 3.29-2.83 4.69-5.74 10.16-8.31 14.42 1.47-.4.74.52-.12 1.71-.83 1.2-1.82 2.66-1.05 3.17-.72.33-1.52 1.51-1.38-.16-.72 2.43-1.43 4.19-2.1 5.76-.67 1.57-1.04 3.05-.78 4.93-.69.41-.48-1.26-.94-.86 0 .43.02 1.68-.44 2.1-.46.41-.24-.84-.25-1.68-.33 1.26-.49 2.26-.51 3.07.01.81.15 1.43.37 1.9.43.95 1.19 1.35 1.92 1.71-.66 1.17-1.03 2.08-1.17 2.94-.09.88.05 1.71.4 2.71-.67.78-1.47 2.17-1.1-.98-.1.43-.31 1.32-.56 2.4-.12.54-.25 1.13-.39 1.75-.1.62-.2 1.25-.28 1.88-.34 2.51-.5 4.83.17 4.98-.37.52-.28 2.47-.17 2.95-.2 1.98-.32 3.06-.35 4.14-.05 1.07-.08 2.14-.06 4.1l.24-1.08c1.47 1.55.34 3.23.6 6.37l-.16-.08c-.26 1.81-.25 2.91-.22 3.65.03.74.13 1.12.21 1.5.09.38.17.75.18 1.48 0 .37 0 .82-.03 1.41 0 .59-.03 1.31-.07 2.21l.9-.5c1.07.21.96 1.78.75 3.83-.14 2.03-.3 4.56.45 6.52l.27-1.57c.51 1.04.2 2.7-.25 4.43-.44 1.72-1.03 3.54-.8 4.68-.03.53-.51-.69-.8-1.34.45 6.17 1.42.44 2.92 4.67-.4.99-1.98-.53-1.19 2.42-.01.8 1.21 2.74 2.47 4.97.68 1.1 1.36 2.27 1.89 3.44.27.59.5 1.17.67 1.74.19.57.34 1.12.4 1.66.1-1.04.22-2.06 1.43-.33.76 1.39 1.11 3.59 1.84 5.6.7 2.01 1.49 3.97 2.96 4.79.08.42.03.62-.07.7.81.94 1.89 2.6 3.1 4.03 1.2 1.43 2.37 2.72 3.14 3.09-.41.94.07 2.1.9 3.37.84 1.27 2.04 2.64 3.31 3.86 1.26 1.23 2.42 2.42 3.21 3.35.79.94 1.1 1.71.51 2.2.85.92 1.66 1.87 2.53 2.76l2.64 2.65-.36.08c1.55 1.83 2.89 2.8 3.93 3.48 1.07.66 1.91.99 2.78 1.27.69.87-.1.56-.28.62 2.43 2.51 3.79 3.89 5.3 4.85 1.5.96 2.99 1.73 5.82 2.76l-.08 1.16c.41.11 1.06.61 1.92 1.34.86.74 1.98 1.62 3.23 2.62.63.49 1.29 1.01 1.99 1.52.72.48 1.47.96 2.24 1.42 1.54.92 3.16 1.77 4.83 2.26-.11.07-.33.17-.88.05 3.68 1.29 7.54 3.88 11.16 5.73 3.58 1.9 6.87 3.02 8.75 1.76 1.68.3 3.41.4 5.1.59-6.17-2.04 1.36-1.24-1.03-2.55 1.24.24 2.73.95 3.54 1.51.82.52.95.96-.58.65l-.42-.31c-1.62 1.61 7.68 2.55 7.26 3.69 6.34 1.23 12.65 2.12 18.93 2.67 1.57.1 3.14.21 4.7.31 1.56.05 3.12.05 4.67.08.78 0 1.55.03 2.32 0 .77-.04 1.54-.08 2.31-.11 1.53-.1 3.07-.13 4.58-.33-.52-.43-1.03-.84-1.54-1.3 1.4-.1 2.79-.28 4.18-.42 1.14.2 1.64.95-1.38 1.27 1.7.63 4.94-1.33 4.95-1.71 5.91-.45-1.99 2.09-.21 1.81l2.43-.54-.58-.07c.94-.47 1.42-.87 2.11-1.22.35-.18.75-.34 1.28-.5.53-.18 1.2-.36 2.08-.55 2.3-.23 1.35.61 2.25.47.02.1.33.08 1.37-.27 1.74-.41 3.46-.88 5.2-1.32l-2.38-.53c2.11-1.17 4.8-1.33 2.08-1.89 1.99.44 6.78-.91 11.2-2.74 2.22-.88 4.31-1.95 6.04-2.71 1.7-.82 2.97-1.47 3.54-1.57.64-.56 1.29-1.08 1.98-1.56.67-.51 1.36-.99 2.08-1.46 1.45-.94 3.05-1.78 4.75-2.85-.97.34-2.14-.45.82-2.16.19 1.44 1.72.9 3.54-.16 1.81-1.07 4.04-2.44 5.71-2.59-1.38.27.53-1.33 2.24-2.86 1.71-1.54 3.12-3.14 1.06-2.53 2.32-1.72.78.65 2.86-.32 1.16-1.31 2.41-2.63 3.78-3.93.68-.65 1.41-1.28 2.13-1.94.71-.67 1.44-1.35 2.17-2.04s1.51-1.36 2.24-2.09c.72-.74 1.45-1.49 2.18-2.25 1.48-1.5 2.82-3.17 4.07-4.92-.2-.32-1.5.47-.79-1.28 1.42-.8 2.72-1.71 4.09-2.6.42-.74.23-1.35.29-2 .06-.64.34-1.33 1.68-2.31-.48.21-1.2.5-.69-.51 5.29-6.53 8.97-14.4 11.91-22.43 2.96-8.07 5.22-16.29 8.17-24.49-1.08 2.18-.87.64-.59-1.1-.36 1.11-.85-.16-1.36 0 .73-2.27 1.51-4.56 2.18-6.89-.61-.71-.49-2.61-.36-4.44.14-1.83.1-3.6-.5-3.99l.17 2.25c-.71-1.52-1.55-.5-2.49.78-.98 1.29-2.04 2.83-2.98 2.55.36.83.35 1.77.15 2.78-.22 1.01-.67 2.08-1.08 3.22-.78 2.29-1.7 4.73-.97 7.53-.59 1.06-.43-1.09-.98-.56.61 1.46.37 3.06-.64 5.86l-.12-.37c-.37 2.05-.97 3.73-1.44 5.31-.47 1.58-1.07 2.98-1.68 4.4-.61 1.42-1.23 2.87-2.05 4.45-.79 1.59-1.61 3.36-2.72 5.4l1.15-.24c-.94 1.77-1.38 2.03-1.98 2.78.35 2.71 2.38-5.08 2.97-2.53-.72.42-1.44 1.43-2.16 2.72-.73 1.29-1.58 2.81-2.36 4.33-.76 1.53-1.7 2.94-2.5 4.06-.82 1.1-1.58 1.87-2.31 1.94-1.66 2.56 1.42-.18-.25 2.4l-.94.36.22 1.07c-1.18 1.64-2.45 2-2.88 1.78.33-.36.68-1.2.95-1.65-1.04.86-2.04 2.37-2.88 3.75-.84 1.38-1.61 2.55-1.96 2.84.69-.69 1.41-1.38 2.09-2.08-1.17 1.72-2.46 3.51-3.89 5.25-1.47 1.7-2.93 3.5-4.54 5.14-.78.84-1.57 1.68-2.34 2.51-.81.8-1.6 1.6-2.37 2.41-1.5 1.65-3.06 3.14-4.38 4.71l.76-.06c-.52.59-.97 1.08-1.39 1.48a15.76 15.76 0 01-2.95 2.18c-.58.33-1.16.69-1.96 1.19s-1.78 1.18-3.12 2.25l.14-.23c-.84 1.19-2.28 2.33-3.88 3.31 1.16-1.37-3.26.88-1.67-.82-2.61 2.13-3.29 2.64-3.61 3.16-.35.49-.35 1-1.96 2.76l-1.27-.19c-.52.64-.78 1.06-1.27 1.54-.5.47-1.22 1.03-2.76 1.81 2.3-1.74-2.47-.13.04-2.18-1.8.37-3.24.91-4.48 1.51-1.25.57-2.3 1.16-3.25 1.71-1.88 1.12-3.44 1.85-5.36 1.25-1.22 1.5.32 1.28 1.99.8 1.68-.44 3.4-1.32 2.63-.76.84.03.34.64-.65 1.32-1 .64-2.52 1.32-3.63 1.59-1.11.35-2.24.06-3.78-.2-.77-.12-1.64-.2-2.65-.16-.51.02-1.05.07-1.64.17-.6.07-1.24.18-1.93.35.56-.12.56-.28 1.11-.4-1.1-.01-2.08.39-3.13.77-.52.19-1.07.38-1.65.5-.59.1-1.21.12-1.9.03-1.23 1.48-3.36.53-3.53 2.17l5.14-1.29c-1.43.46-2.76 1.28-4.38 1.98-1.62.69-3.55 1.12-6.08 1 .35-.37 1.77-.97 2.74-1.33-1.49-.3-2.72.7-4.27.33.14-.78 1.72-1.05 3.63-1.34.96-.14 2.01-.28 3-.49.98-.26 1.91-.57 2.64-1.01-.81-.21-2.23.38-3.31.67-1.08.29-1.79.41-1.12-.54-.98 1.22-2.4 1.33-4 1.4-1.61 0-3.4-.07-5.29.91l.2-.97c-.6.22-1.84.69-2.97.69l1.98-1.28c-3.08 1.11-5.99-.71-8.94-.28 3.1.07 3.45.35 3.35.72-.1.38-.66.86.68 1.17-7.81 1.13-4.42-2.42-12.94-2.64 1.16 0 4.29.91 2.44 1.22-.81-.17-1.75-.35-2.59-.64-.84-.29-1.6-.6-2.07-.91-5.66-.52.74 1.08-1.74 1.35-1.77-1.36-2.84.03-5.42-.03l.16-.95c-.79-.22-1.41-.36-1.91-.43-.5-.1-.87-.14-1.15-.13-.58.02-.82.22-1.05.41-.45.4-.83.79-3.64-.24l2.75-.74c-1.02-.13-2.05-.21-3.07-.38l.88-.9c-1.7-.04-2.79-.21-3.83-.49-1.05-.28-2.05-.69-3.53-1.38.51.89-.95 1.53-3.74.62-1.67-1.22 1.34-.44-2.54-1.81 1.1-.24 2.26-.51 3.66.87.28-.24 1.06-.28 1.34-.51-1.8-1.24-4.9-1.98-6.28-2.51.51.24 1.12.54 1.4.79-.99-.16-2-.3-3-.48l-2.98-.62c-.71-.72.1-.67.88-.63-1.13-.42-2.1-.3-3.72-1.03.75-.5 1-1.24 3.41-.57-1.83-.46-3.6-1.09-5.41-1.69-.19-.46-2.11-2.15-1.32-2.07-1.22-.98-3.05-1.57-4.98-2.29-1.88-.8-3.94-1.63-5.45-3.07-.26 0-.69-.13-1.48-.55-.77-.6-1.48-1.22-2.19-1.84-.69-.65-1.35-1.32-2.07-1.96-.71-.65-1.47-1.26-2.3-1.86-.81-.63-1.72-1.22-2.76-1.78-.34-.93-.71-1.81-1-2.77-2.82-2.25 1.37 3.75-3.36-.02-3.41-2.64-.32-1.95-1.09-3.28-.98-.51-2.36-1.19-3.75-2.19a11.435 11.435 0 01-3.51-4.29c1.05.81 1.56 1.71 2.43 2.56zM35.21 195c.23.38.64.92.94 1.47.33.54.56 1.08.41 1.47-1.4-.52-1.19-1.43-1.35-2.94zm-4.98-67.61c.13.71-.23 1.67-.85 2.7.12-.83.34-1.75.85-2.7zm154.08-87.66s-.07 0-.11.01c-1.86-1.03-1.2-.65.11-.01zm3.92 1.87c.45.03.47-.1.35-.29-.37.12-1.28-.23-2.29-.69.2.34.66.71 1.94.98zm-14.88 235.12l-.88-.06c1.77-.69 1.32-.33.88.06z"></path>
						<path d="M29.83 135.31c-.2.21-.39.25-.58.27.1.37.28.41.58-.27zM79.2 250.83l.1.09c.09 0 .16-.03.21-.06l-.31-.02zM123.86 43.3c-.84 0-1.33-.08-1.67-.21 0 .24.41.37 1.67.21zM209.58 50.36c-.82-.45-1.69-.82-2.53-1.22 1.2.64 1.52 1.04 2 1.55.07-.23-.21-.79.53-.33zM224.86 69.45c.36.18.61.56.97.74l.23-.4c-1.23-1.13-2.31-1.67-1.2-.34zM210.02 54.45c-.13.4.2.77.78 1.16.58.37 1.39.79 2.2 1.29-.1-.06-.19-.12-.28-.2.55-.3.36-.67-.21-1.08-.57-.4-1.54-.78-2.5-1.17zM213.38 57.13c.5.31 1 .64 1.45 1.01.45-.24-.53-.49-1.45-1.01zM193.52 43.19c.76.57.95-.71 1.29-.19.69-.26-.86-.61-1.95-.7-.54-.05-.99 0-.99.13 0 .12.45.36 1.65.76z"></path>
						<path d="M209.85 57.52L209.83 56.32 208.5 56.42 209.85 57.52z"></path>
						<path d="M197.39 49.47l2.55 1.62c.04-.17.42-.08.88.07-1.63-.87-3.36-1.98-3.43-1.68zM200.82 51.15c.84.47 1.64.93 2.19 1.05-.46-.24-1.44-.8-2.19-1.05zM206.25 55.57l-.64-.65-1.79-1.12c.81.59 1.65 1.13 2.43 1.77zM166.89 38.9l-3.29-.3c-.38.28.46.64 1.68.72.81-.1 2.04-.01 1.61-.43zM175.82 43.86c-.78-.44-.78-.67-1.17-1.12l-.42 1.17 1.58-.05zM166.66 41.94c-.39.28-4.74.16-.75.79.38-.3 3.59.05.75-.79z"></path>
						<path d="M118.34 40.9L119.14 40.7 118.61 38.73 118.34 40.9z"></path>
						<path d="M81.45 61.59c3.37-1.57.06-1.55 3.22-2.81.49-.89-2.59 1.04-2.05.21-1.63 1.65-2.77 2.04-1.17 2.61zM82.62 58.99c.26-.26.53-.55.81-.89-.49.46-.69.71-.81.89zM267.93 164.16c.23-.85.35-1.71.53-2.57l-.73 1.64c.08.31.13.62.2.93zM266.58 159.17l1.31-.59-1.14-1.55c.04.58.13 1.7-.18 2.14zM35.73 187.93l-.35-.09c-.23.44-.1.98.15 2.06l.2-1.97z"></path>
						<path d="M47.8 217.34L47.52 216.86 47.09 218.35 47.8 217.34z"></path>
						<path d="M65.71 237.12c-.77-.76-1.83-1.5-2.54-2.33 1.75 1.58 1.74 3.57 2.54 2.33z"></path>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default PopularCategoryCard;
