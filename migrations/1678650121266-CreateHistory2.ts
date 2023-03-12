import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateHistory21678650121266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE history2 (
                    id serial not null,
                    name varchar(255)
           );`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
