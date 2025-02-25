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

  static async deleteOrder(id: string) {
    return await prisma.order.delete({ where: { id } });
  }

  static async updateOrderStatus(orderId: string, status: string) {
    // Verifica se o pedido existe
    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new Error("Pedido não encontrado.");
    }

    // Valida se o status informado é um dos permitidos
    const validStatuses = [
      "PENDING",
      "IN_PROGRESS",
      "READY",
      "DELIVERED",
      "CANCELED",
    ];
    if (!validStatuses.includes(status)) {
      throw new Error("Status inválido.");
    }

    return await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
  }

  static async getRevenue(startDate?: string, endDate?: string) {
    // Monta o filtro baseado nas datas passadas
    const dateFilter: any = {};

    if (startDate) dateFilter.gte = new Date(startDate);
    if (endDate) dateFilter.lte = new Date(endDate);

    // Busca os pedidos finalizados (entregues) e soma o total
    const revenue = await prisma.order.aggregate({
      _sum: { total: true },
      where: {
        status: "DELIVERED", // Apenas pedidos que foram entregues contam para o lucro
        createdAt: dateFilter.gte || dateFilter.lte ? dateFilter : undefined,
      },
    });

    return { totalRevenue: revenue._sum.total || 0 }; // Retorna 0 se não houver pedidos
  }
}
