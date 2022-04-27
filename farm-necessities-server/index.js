import cors from 'cors';
import express from 'express';
import addressRoutes from './routes/address.js';
import authRoutes from './routes/authenticate.js';
import initializeDatabaseRoutes from './routes/initialize-database.js';
import productRoutes from './routes/product.js';
import usersRoutes from './routes/users.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/initialize-database', initializeDatabaseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/product', productRoutes);

app.use('/', (req, res) => {
  res.send('Farm Necessities API is up and running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Farm Necessities app listening at http://localhost:${PORT}`);
});
