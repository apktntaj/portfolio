"use server";

import { $Enums } from "@prisma/client";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function createActivity(formData: FormData) {
  const rawData = {
    category: formData.get("category"),
  };

  if (rawData.category === "") return;

  console.log(rawData.category);

  await prisma.activity.create({
    data: {
      time: new Date(),
      category: rawData.category as $Enums.RCategory,
    },
  });

  revalidatePath("/raya");
}
