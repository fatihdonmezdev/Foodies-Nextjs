import Link from "next/link";
import classess from "./page.module.css";
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
    </>
  );
};

export default MealsPage;
