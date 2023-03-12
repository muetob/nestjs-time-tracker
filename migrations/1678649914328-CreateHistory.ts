import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateHistory1678649914328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE history (
                    id serial not null,
                    name varchar(255)
           );`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          'DROP TABLE histroy;'
        )
    }

}
