-- CreateTable
CREATE TABLE `customer_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `level` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `no_telpon` VARCHAR(191) NOT NULL,
    `accessToken` VARCHAR(191) NOT NULL DEFAULT 'NULL',
    `refreshToken` VARCHAR(191) NOT NULL DEFAULT 'NULL',

    UNIQUE INDEX `customer_users_email_key`(`email`),
    UNIQUE INDEX `customer_users_no_telpon_key`(`no_telpon`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
