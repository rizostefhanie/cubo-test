import express, {  Request, Response } from "express";
import api_v1 from "./routes";

const app = express();


// Body parser
app.use(express.json());

/**
 * Health endpoint
 */
app.get('/health', (req: Request, res: Response) => {
  try {
    res.status(200).send({
      message: 'Cubo server is working properly.'
    });
  } catch (error) {
    res.status(400).send({
      code: error.code,
      message: error.message
    });
  }
});
app.use("/v1", api_v1);

export default app;