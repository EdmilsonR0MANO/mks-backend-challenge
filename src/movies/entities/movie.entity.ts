import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { UUID } from "crypto";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  releaseYear: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: number;
}
