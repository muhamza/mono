import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from "@mono/types";

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@test.com",
      dob: "1990-11-01",
      address: {
        street: ["101 Baker Street"],
        city: "London",
        country: "England",
        postalCode: "1202a",
      },
    },
    {
      id: "2",
      firstName: "Bob",
      lastName: "Doe",
      email: "bob@test.com",
      dob: "1992-01-01",
      address: {
        street: ["10 Downing Street", "Alpha mall"],
        city: "London",
        country: "England",
        postalCode: "10981",
      },
    },
    {
      id: "3",
      firstName: "Chris",
      lastName: "Lewis",
      email: "chris@test.com",
      dob: "1990-12-23",
      address: {
        street: ["012 Roberto Street", "Alexander Platz"],
        city: "Berlin",
        country: "Germany",
        postalCode: "10829",
      },
    },
  ];

  private findUser(id: string): { user: User; index: number } {
    const index = this.users.findIndex((item) => item.id === id);
    if (index < 0) {
      throw new NotFoundException();
    }
    return { user: this.users[index], index };
  }

  getUsers(): User[] {
    console.log("status", process.env.STATUS);
    return this.users;
  }

  getUserById(id: string): User {
    const { user } = this.findUser(id);
    return user;
  }

  createUser(newUser: User): User {
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedUser: User): User {
    const { index } = this.findUser(id);
    this.users[index] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: string) {
    const { user, index } = this.findUser(id);
    this.users.splice(index, 1);
    return user;
  }
}
