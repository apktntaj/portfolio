import prisma from "@/app/lib/prisma";

export async function GET() {
  const users = prisma.user.findMany({
    where: {
      name: "John",
    },
  });

  return new Response(JSON.stringify(users));
}

export async function POST() {
  const user = await prisma.user.create({
    data: {
      email: "sakura@gmai.com",
      name: "Sakura",
      role: "USER",
    },
  });

  return new Response(JSON.stringify(user));
}
