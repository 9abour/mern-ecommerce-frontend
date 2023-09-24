import { lazy } from "react";

const Hero = lazy(() => import("@/components/hero/components/Hero"));
const Categories = lazy(() => import("@/components/categories/Categories"));
const Production = lazy(() => import("@/components/production/Production"));

export default function Home() {
	return (
		<>
			<Hero />
			<Categories />
			<Production />
		</>
	);
}
