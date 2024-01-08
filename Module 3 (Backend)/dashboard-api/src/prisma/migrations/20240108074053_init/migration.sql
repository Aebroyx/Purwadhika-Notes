/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Admins` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Admins_username_key` ON `Admins`(`username`);
