import {MigrationInterface, QueryRunner} from "typeorm";

export class creataddress1575949449897 implements MigrationInterface {
    name = 'creataddress1575949449897'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
    }

}
