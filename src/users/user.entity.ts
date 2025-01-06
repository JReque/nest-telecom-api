import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  docType: string;

  @Column()
  docNum: string;

  @Column()
  email: string;

  @Column()
  customerId: number;

  @Column()
  givenName: string;

  @Column()
  familyName1: string;

  @Column()
  phone: string;
}
