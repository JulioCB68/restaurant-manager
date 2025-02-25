import { FastifyInstance } from "fastify";
import { OrdersController } from "../controllers/orders";

export async function ordersRoutes(app: FastifyInstance) {
  app.post("/orders", OrdersController.createOrder);
  app.get("/orders", OrdersController.listOrders);
  app.get("/orders/:id", OrdersController.getOrderById);
  app.patch("/orders/:orderId/status", OrdersController.updateOrderStatus);
  app.delete("/orders/:id", OrdersController.deleteOrder);
}
