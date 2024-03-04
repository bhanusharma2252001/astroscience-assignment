-- DropIndex
DROP INDEX "user_details_id_key";

-- AlterTable
CREATE SEQUENCE user_details_id_seq;
ALTER TABLE "user_details" ALTER COLUMN "id" SET DEFAULT nextval('user_details_id_seq'),
ADD CONSTRAINT "user_details_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE user_details_id_seq OWNED BY "user_details"."id";
