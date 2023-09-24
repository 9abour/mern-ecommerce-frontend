import { lazy } from "react";

const Hero = lazy(() => import("@/components/hero/components/Hero"));
const Categories = lazy(() => import("@/components/categories/Categories"));

export default function Home() {
	return (
		<>
			<Hero />
			<Categories />
		</>
	);
}
