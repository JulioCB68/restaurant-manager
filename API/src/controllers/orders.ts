import { FastifyReply, FastifyRequest } from "fastify";
import { OrdersService } from "../services/orders";

export class OrdersController {
  static async createOrder(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { tableId, items, total } = req.body as {
        tableId: string;
        items: any[];
        total: number;
      };
      const order = await OrdersService.createOrder(tableId, items, total);
      return reply.status(201).send(order);
    } catch (error) {
      return reply.status(400).send({
        error: error instanceof Error ? error.message : "Erro desconhecido.",
      });
    }
  }

  static async listOrders(req: FastifyRequest, reply: FastifyReply) {
    try {
      const orders = await OrdersService.listOrders();
      return reply.send(orders);
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao listar pedidos." });
    }
  }

  static async getOrderById(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      const order = await OrdersService.getOrderById(id);

      if (!order) {
        return reply.status(404).send({ error: "Pedido não encontrado." });
      }

      return reply.send(order);
    } catch (error) {
      return reply.status(400).send({ error: "Erro ao buscar pedido." });
    }
  }

  static async updateOrderStatus(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { orderId } = req.params as { orderId: string };
      const { status } = req.body as { status: string };

      const updatedOrder = await OrdersService.updateOrderStatus(
        orderId,
        status
      );

      return reply.status(200).send(updatedOrder);
    } catch (error) {
      return reply.status(400).send({
        error:
          error instanceof Error
            ? error.message
            : "Erro ao atualizar o status do pedido.",
      });
    }
  }

  static async deleteOrder(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      await OrdersService.deleteOrder(id);
      return reply.status(204).send();
    } catch (error) {
      return reply.status(400).send({ error: "Erro ao deletar pedido." });
    }
  }

  static async getRevenue(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { startDate, endDate } = req.query as {
        startDate?: string;
        endDate?: string;
      };
      const revenue = await OrdersService.getRevenue(startDate, endDate);
      return reply.status(200).send(revenue);
    } catch (error) {
      return reply.status(400).send({
        error:
          error instanceof Error ? error.message : "Erro ao buscar os lucros.",
      });
    }
  }
}
