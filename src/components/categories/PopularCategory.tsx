import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";
import burger from "../../../public/burger.png";
import Heading from "../common/typography/Heading";

const PopularCategory = () => {
	return (
		<section className="container mx-auto">
			<Heading text="Popular Category" />
			<div className="grid grid-cols-3 gap-2 lg:gap-4 my-8 px-6 md:px-0">
				<div className="grid gap-2 lg:gap-4">
					<PopularCategoryCard
						name="Burger"
						image={burger}
						bg="bg-primary"
						customStyles="left-0"
					/>
					<PopularCategoryCard
						name="Burger"
						image={burger}
						bg="bg-primary"
						customStyles="left-0"
					/>
				</div>
				<PopularCategoryCard
					name="Burger"
					image={burger}
					bg="bg-primary"
					customStyles="left-0"
					fullHeight={true}
				/>

				<div className="grid gap-2 lg:gap-4">
					<PopularCategoryCard
						name="Burger"
						image={burger}
						bg="bg-primary"
						customStyles="left-0"
					/>
					<PopularCategoryCard
						name="Burger"
						image={burger}
						bg="bg-primary"
						customStyles="left-0"
					/>
				</div>
			</div>
		</section>
	);
};

export default PopularCategory;
