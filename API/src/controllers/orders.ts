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
      const { id } = req.params as { id: string };
      const { status } = req.body as {
        status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
      };

      const order = await OrdersService.updateOrderStatus(id, status);
      return reply.send(order);
    } catch (error) {
      return reply
        .status(400)
        .send({ error: "Erro ao atualizar status do pedido." });
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
}
