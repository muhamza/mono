import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";

import { User } from "@mono/types";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  listUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(":id")
  getById(@Param("id") id: string): User {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User): User {
    return this.userService.createUser(user);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() user: User): User {
    return this.userService.updateUser(id, user);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string): User {
    return this.userService.deleteUser(id);
  }
}
