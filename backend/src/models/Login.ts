import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('login')
export default class Login{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  login: string;

  @Column()
  senha: string;

}