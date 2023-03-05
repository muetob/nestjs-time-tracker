import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from "class-transformer";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Expose()
  get nameAndId(): string {
    return `${this.id}:${this.name}`;
  }
}
