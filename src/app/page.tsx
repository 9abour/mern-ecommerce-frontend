import PopularCategory from "@/components/categories/components/PopularCategory";
import { lazy } from "react";

const Hero = lazy(() => import("@/components/hero/components/Hero"));
const AllCategories = lazy(
	() => import("@/components/categories/components/AllCategories")
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
