import express, { type Request, type Response } from "express";
import { type ProductItem } from "./types.js";

export const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear cuerpos con formato JSON:
app.use(express.json());

const products: ProductItem[] = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    category: "perifericos",
    price: 89.99,
    stock: 15,
    active: true,
    createdAt: "2026-09-01T08:00:00Z",
  },
  {
    id: 2,
    name: "Ratón Óptico Ergonómico",
    category: "perifericos",
    price: 45.5,
    stock: 3,
    active: true,
    createdAt: "2026-09-02T09:00:00Z",
  },
  {
    id: 3,
    name: "Monitor 27 Pulgadas 4K",
    category: "monitores",
    price: 349.0,
    stock: 0,
    active: false,
    createdAt: "2026-09-03T10:00:00Z",
  },
];

// Endpoint de comprobación de salud (Health Check):
app.get("/api", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "DocuMind API operativa (Express 5 + TypeScript)",
    timestamp: new Date().toISOString(),
  });
});

// Endpoint: Listado de documentos (con soporte para filtrado por tag)
app.get("/api/documents", (req: Request, res: Response) => {
  const { tag } = req.query;
  let result = documents;

  if (typeof tag === "string" && tag.trim() !== "") {
    const filterTag = tag.trim().toLowerCase();
    result = result.filter((d) =>
      d.tags.some((t) => t.toLowerCase() === filterTag),
    );
  }

  res.status(200).json({
    status: "success",
    total: result.length,
    data: result,
  });
});

// Endpoint: Obtener un documento por su ID numérico
app.get("/api/documents/:id", (req: Request, res: Response) => {
  const documentId = Number(req.params.id);

  if (Number.isNaN(documentId) || !Number.isInteger(documentId)) {
    return res.status(400).json({
      status: "fail",
      error: "BadRequest",
      message: "El parámetro :id debe ser un número entero válido.",
    });
  }

  const doc = documents.find((d) => d.id === documentId);

  if (!doc) {
    return res.status(404).json({
      status: "fail",
      error: "NotFound",
      message: `El documento con ID ${documentId} no existe.`,
    });
  }

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

// Inicialización del listener HTTP si no se importa desde tests:
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(
      `Servidor Express 5 (TypeScript) activo en http://localhost:${PORT}`,
    );
  });
}
