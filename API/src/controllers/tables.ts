import { FastifyReply, FastifyRequest } from "fastify";
import { TablesService } from "../services/tables";

export class TablesController {
  static async listTables(req: FastifyRequest, reply: FastifyReply) {
    try {
      const tables = await TablesService.listTables();
      return reply.send(tables);
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao listar mesas." });
    }
  }

  static async getTableByNumber(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { number } = req.params as { number: string };
      const table = await TablesService.getTableByNumber(Number(number));

      if (!table) {
        return reply.status(404).send({ error: "Mesa não encontrada." });
      }

      return reply.send(table);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido.";
      return reply.status(500).send({ error: errorMessage });
    }
  }

  static async createTable(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { number } = req.body as { number: number };
      const table = await TablesService.createTable(number);
      return reply.status(201).send(table);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido.";
      return reply.status(400).send({ error: errorMessage });
    }
  }

  static async updateTableStatus(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      const { status } = req.body as {
        status: "AVAILABLE" | "OCCUPIED" | "RESERVED";
      };

      const table = await TablesService.updateTableStatus(id, status);
      return reply.send(table);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido.";
      return reply.status(400).send({ error: errorMessage });
    }
  }

  static async deleteTable(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      await TablesService.deleteTable(id);
      return reply.status(204).send();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido.";
      return reply.status(400).send({ error: errorMessage });
    }
  }
}
