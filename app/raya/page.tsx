import Time from "../ui/time";
import Form from "../ui/form";
import { fetchActivities } from "../lib/data";
import Card from "../ui/card";
import { Activity } from "@prisma/client";
import { createActivity } from "../lib/actions";
import prisma from "../lib/prisma";

export default async function Raya() {
  await prisma.activity.create({
    data: {
      time: new Date(),
      category: "PUP",
    },
  });
  const activites: Activity[] = await fetchActivities();

  return (
    <main className='container mx-auto h-screen'>
      <h1 className='text-center text-6xl font-bold m-4 shadow-sm'>
        Raya Anakku
      </h1>

      <div className='container grid grid-cols-3 gap-4 overflow-x-auto h-3/5 p-3'>
        {activites.map((act, idx) => {
          return <Card key={idx} activity={act} />;
        })}
      </div>

      <Time />
      <Form />
    </main>
  );
}
