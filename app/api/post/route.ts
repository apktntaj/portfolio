import prisma from "@/app/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany();

  return new Response(JSON.stringify(posts));
}
