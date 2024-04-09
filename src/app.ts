import express, { Application } from 'express';
import mainRouter from './routes/index.mts';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 8080;

const corsOptions = {"origin": "*"};

const app: Application = express();

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Use the imported routers
app.use(mainRouter);

// Set up a default catch-all route that sends back a welcome message.
app.get('*', (_req, res) => {
  res.send('Welcome to the Express server!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;