import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

interface HealthResponse {
  status: string;
  message: string;
  nodeVersion: string;
  timestamp: string;
}

app.get("/api/health", (_req: Request, res: Response<HealthResponse>) => {
  res.status(200).json({
    status: "success",
    message: "¡Entorno Node.js + TypeScript + Express 5 operativo!",
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor TypeScript ejecutándose en http://localhost:${PORT}`);
});
