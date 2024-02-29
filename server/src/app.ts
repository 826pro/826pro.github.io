import fastify from "fastify";
import cors from "@fastify/cors";

import { getAllProducts } from "./routes/get-all-products";
import { getProductById } from "./routes/get-product-by-id";
import { getProductsByCategoryId } from "./routes/get-products-by-category";

export const app = fastify();

app.register(cors);

app.register(getAllProducts);
app.register(getProductById);
app.register(getProductsByCategoryId);