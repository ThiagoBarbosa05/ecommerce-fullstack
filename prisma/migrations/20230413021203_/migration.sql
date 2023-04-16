/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "city_name" VARCHAR(200),
    "country_name" VARCHAR(200),
    "customer_id" INTEGER,
    "house_number" INTEGER,
    "state_name" VARCHAR(200),
    "street_name" TEXT,
    "zip_code" INTEGER,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100),
    "password" VARCHAR(100),
    "name" VARCHAR(200),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "customer_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "date" TIMESTAMP(6),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("customer_id","product_id")
);

-- CreateTable
CREATE TABLE "products" (
    "name" VARCHAR(300),
    "description" VARCHAR(300),
    "price" DECIMAL,
    "img" TEXT,
    "id" SERIAL NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
