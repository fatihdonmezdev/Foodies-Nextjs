import Link from "next/link";
import classess from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classess.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classess.highlight}>by you!</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classess.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classess.main}>
        <Suspense
          fallback={<p className={classess.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
