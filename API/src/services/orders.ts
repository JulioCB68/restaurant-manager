import { prisma } from "../lib/prisma";

export class OrdersService {
  static async createOrder(tableId: string, items: any[], total: number) {
    // Verifica se a mesa existe antes de criar o pedido
    const tableExists = await prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!tableExists) {
      throw new Error("Mesa não encontrada.");
    }

    return await prisma.order.create({
      data: {
        tableId,
        items,
        total,
        status: "PENDING",
      },
    });
  }

  static async listOrders() {
    return await prisma.order.findMany({ include: { table: true } });
  }

  static async getOrderById(id: string) {
    return await prisma.order.findUnique({ where: { id } });
  }

  static async updateOrderStatus(
    id: string,
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED"
  ) {
    return await prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  static async deleteOrder(id: string) {
    return await prisma.order.delete({ where: { id } });
  }
}
