import express from 'express';
import { json } from 'body-parser';
import paypalRoutes from './routes/paypal';

const app = express();
app.use(json());

app.use('/api/paypal', paypalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
