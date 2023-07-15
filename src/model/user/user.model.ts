import { PrismaClient, User } from '@prisma/client';
// import User from '../../interfaces/user.interface';

export default class UserModel {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  };

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
};
