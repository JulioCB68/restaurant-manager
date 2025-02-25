import { prisma } from "../lib/prisma";

export class TablesService {
  static async listTables() {
    return await prisma.table.findMany();
  }

  static async getTableByNumber(number: number) {
    return await prisma.table.findUnique({
      where: { number },
    });
  }

  static async createTable(number: number) {
    const existingTable = await prisma.table.findUnique({ where: { number } });

    if (existingTable) {
      throw new Error("Mesa já existente!");
    }

    return await prisma.table.create({
      data: { number, status: "AVAILABLE" },
    });
  }

  static async updateTableStatus(
    id: string,
    status: "AVAILABLE" | "OCCUPIED" | "RESERVED"
  ) {
    return await prisma.table.update({
      where: { id },
      data: { status },
    });
  }

  static async deleteTable(id: string) {
    return await prisma.table.delete({ where: { id } });
  }
}
