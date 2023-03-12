import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUser1678648724839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE users (
                    id serial not null,
                    name varchar(255)
           );`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          'DROP TABLE users;'
        )
    }

}
