import { $Enums } from "@prisma/client";
import prisma from "./prisma";

export async function fetchActivities() {
  const response = await prisma.activity.findMany();
  return response;
}

export async function createActivity(category: string) {
  const response = await prisma.activity.create({
    data: {
      time: new Date(), // or provide a specific date string
      category: category as $Enums.RCategory,
    },
  });
  return response;
}
