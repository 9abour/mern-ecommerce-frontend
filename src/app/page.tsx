import AllCategories from "@/components/categories/components/AllCategories";
import PopularCategory from "@/components/categories/components/PopularCategory";
import Hero from "@/components/hero/components/Hero";
import Production from "@/components/production/components/Production";

export default async function Home() {
	return (
		<>
			<Hero />
			<PopularCategory />
			<Production />
			<AllCategories />
		</>
	);
}
