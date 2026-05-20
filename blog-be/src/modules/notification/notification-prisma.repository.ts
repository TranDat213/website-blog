import { Notification, PrismaClient } from '@prisma/client';
import { INotificationRepository } from './notification.repository';

export class PrismaNotificationRepository implements INotificationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findNotificationsByUserId(userId: string): Promise<Notification[]> {
    return await this.prisma.notification.findMany({
      where: {
        userId,
        isDeleted: false,
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
