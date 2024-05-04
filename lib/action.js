"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    !mealData.title ||
    !mealData.summary ||
    !mealData.instructions ||
    !mealData.image ||
    !mealData.creator ||
    !mealData.creator_email
  ) {
    return { message: "Please fill out all fields." };
  }
  await saveMeal(mealData);
  revalidatePath("/meals");
  redirect("/meals");
}
