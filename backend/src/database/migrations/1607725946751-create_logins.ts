import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLogins1607725946751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'login',
            columns:[
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
      
              {
                name: 'login',
                type: 'varchar',
              },
      
              {
                name:'senha',
                type: 'varchar',
              }
            ]      
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('login');
    }

}
