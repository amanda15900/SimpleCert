/*
  Warnings:

  - You are about to drop the `certificates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "certificates";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Certificados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "horas" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "participante" TEXT NOT NULL,
    "participacao" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Certificados_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
