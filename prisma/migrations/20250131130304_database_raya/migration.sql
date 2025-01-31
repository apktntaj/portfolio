-- CreateEnum
CREATE TYPE "RCategory" AS ENUM ('TIDUR', 'BANGUN', 'BUAT_SUSU', 'SISA_SUSU', 'PUP', 'GANTI_PAMPERS');

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "category" "RCategory" NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);
