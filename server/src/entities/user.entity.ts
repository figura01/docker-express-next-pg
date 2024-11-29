import { Field, ID, InputType, ObjectType } from 'type-graphql'
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  password: string
}

@InputType()
export class CreateUserInput {
  @Field()
  email: string

  @Field()
  password: string
}
