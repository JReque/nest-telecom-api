import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  productName: string;

  @Column()
  mbSpeed: number;

  @Column()
  gbData: number;

  @Column()
  productTypeName: string;

  @Column()
  numeracioTerminaly: string;
}
