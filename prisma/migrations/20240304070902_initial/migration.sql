-- CreateTable
CREATE TABLE "user_details" (
    "id" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "POB" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "profilePic" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_details_id_key" ON "user_details"("id");
