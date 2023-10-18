import PopularCategory from "@/components/categories/PopularCategory";
import { lazy } from "react";

const Hero = lazy(() => import("@/components/hero/components/Hero"));
const AllCategories = lazy(
	() => import("@/components/categories/AllCategories")
);
const Production = lazy(() => import("@/components/production/Production"));

export default function Home() {
	return (
		<>
			<Hero />
			<PopularCategory />
			<Production />
			<AllCategories />
		</>
	);
}
