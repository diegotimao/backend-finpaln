import { PrismaClient, User } from '@prisma/client';

export default class UserModel {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  };

  public async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  public async createUser(name: string, email: string, hashedPassword: string): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      }
    });
    return user;
  }

  public async login(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email
        }
      });
      return user as User  
    } catch (error) {
      return null
    } finally {
      await this.prisma.$disconnect();
    }
  }
};
