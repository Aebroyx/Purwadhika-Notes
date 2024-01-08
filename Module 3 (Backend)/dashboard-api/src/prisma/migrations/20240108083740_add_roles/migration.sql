/*
  Warnings:

  - Added the required column `role` to the `Admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Admins` ADD COLUMN `role` VARCHAR(191) NOT NULL;
