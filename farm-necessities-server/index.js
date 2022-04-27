import cors from 'cors';
import express from 'express';
import addressRoutes from './routes/address.js';
import authRoutes from './routes/authenticate.js';
import initializeDatabaseRoutes from './routes/initialize-database.js';
import productRoutes from './routes/product.js';
import usersRoutes from './routes/users.js';
import categoryRoutes from './routes/category.js';
import queryRoutes from './routes/queries.js';
import productCategoryRoutes from './routes/product-category.js';
import cartRoutes from './routes/cart.js';
import ratingRoutes from './routes/rating.js';
import paymentDetailRoutes from './routes/payment-detail.js';
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/initialize-database', initializeDatabaseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/queries', queryRoutes);
app.use('/api/product-category', productCategoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/rating', ratingRoutes);
app.use('/api/payment-detail', paymentDetailRoutes);

app.use('/', (req, res) => {
  console.log(req);
  res.send('Farm Necessities API is up and running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Farm Necessities app listening at http://localhost:${PORT}`);
});
