/*
  Warnings:

  - Added the required column `userId` to the `listaDeTarefas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_listaDeTarefas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "listaDeTarefas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_listaDeTarefas" ("description", "id", "isDone", "name") SELECT "description", "id", "isDone", "name" FROM "listaDeTarefas";
DROP TABLE "listaDeTarefas";
ALTER TABLE "new_listaDeTarefas" RENAME TO "listaDeTarefas";
PRAGMA foreign_key_check("listaDeTarefas");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
