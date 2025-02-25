import { FastifyInstance } from "fastify";
import { TablesController } from "../controllers/tables";

export async function tablesRoutes(app: FastifyInstance) {
  app.get("/tables", TablesController.listTables);
  app.get("/table/:number", TablesController.getTableByNumber);
  app.post("/tables", TablesController.createTable);
  app.put("/tables/:id", TablesController.updateTableStatus);
  app.delete("/tables/:id", TablesController.deleteTable);
}
