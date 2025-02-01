import { Activity } from "@prisma/client";
import prisma from "./prisma";

export async function fetchActivities(): Promise<Activity[]> {
  try {
    const response: Activity[] = await prisma.activity.findMany();
    return response;
  } catch (err) {
    console.error(err);
    return [];
  }
}
