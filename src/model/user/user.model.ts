import { PrismaClient, User } from '@prisma/client';
import { findByUsers } from '../../interfaces/user.findBay.interrface';

export default class UserModel {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  };

  public async getUsers(): Promise<findByUsers[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    });
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
