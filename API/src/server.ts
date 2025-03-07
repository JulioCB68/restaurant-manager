import cors from "@fastify/cors";
import Fastify from "fastify";

import { ordersRoutes } from "./routes/orders";
import { tablesRoutes } from "./routes/tables";

const app = Fastify();

// Habilita CORS para todas as origens (ajuste conforme necessário)
app.register(cors, {
  origin: ["http://localhost:9274", "http://localhost:3000"], // Permite todas as origens
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Métodos permitidos
});

app.register(ordersRoutes);
app.register(tablesRoutes);

app.listen({ port: 9274 }, () => {
  console.log("🚀 Servidor rodando em http://localhost:9274");
});
