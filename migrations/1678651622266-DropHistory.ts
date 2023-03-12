import { MigrationInterface, QueryRunner } from "typeorm"

export class DropHistory1678651622266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE if exists history;
        DROP TABLE if exists history2;
        `)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
