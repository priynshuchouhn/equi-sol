-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileImageUrl" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
