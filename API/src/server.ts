import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return { message: "API funcionando!" };
});

app.listen({ port: 3333 }, () => {
  console.log("🚀 Servidor rodando em http://localhost:3333");
});
