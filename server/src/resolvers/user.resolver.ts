import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../entities/user.entity";
import { CreateUserInput, MutationCreateUserArgs } from "../types/resolvers-types";
import UserService from '../services/user.service';

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async getUsers() {
    const users = await new UserService().getUsers();
    return users;
  }

  async getOneUserById(id: string) {
    const user = await new UserService().getOneUserById(id);
    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput ) {
    console.log('data from resolver:', data)
    const newUser = await new UserService().createUser( data as CreateUserInput);
    return newUser;
  }

  // @Mutation(() => User)
  // async updateUser(_: any, { id, data }: { id: string, data: CreateUserInput }) {
  //   console.log('data from resolver:', data)
  //   const newUser = await new UserService().createUser(data);
  //   return newUser;
  // }
  
  // createAd: async (_: any, { data }: { data: CreateAdInput }) => {
  //   const newAd = await new AdsService().create(data);
  //   return newAd;
  // },
}