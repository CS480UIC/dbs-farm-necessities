import cors from 'cors';
import express from 'express';
import initializeDatabaseRoutes from './routes/initialize-database.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/initialize-database', initializeDatabaseRoutes);

app.use('/', (req, res) => {
  res.send('Farm Necessities API is up and running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Farm Necessities app listening at http://localhost:${PORT}`);
});
