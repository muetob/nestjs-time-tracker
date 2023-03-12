import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTask1678647959866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE tasks (
                id serial not null,
                title varchar(255)
           );`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          'DROP TABLE tasks;'
        )
    }

}
