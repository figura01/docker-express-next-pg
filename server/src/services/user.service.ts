import { In, Like, Repository } from "typeorm";
import { User }from "../entities/user.entity";
import datasource from "../database/db";
import { CreateUserInput, MutationCreateUserArgs } from "../types/resolvers-types";
import { validate } from "class-validator";

// import { aggregateErrors } from "../lib/utilities";

// import AggregateError from "aggregate-error";
export default class UserService {
  db: Repository<User>;
  constructor() {
    this.db = datasource.getRepository(User);
  }

  async getUsers() {
    return await this.db.find();
  }

  async getOneUserById(id: string) {
    return await this.db.findOneBy({id});
  }

  async createUser(data: any) {
    return await this.db.save(data);
  }
}
