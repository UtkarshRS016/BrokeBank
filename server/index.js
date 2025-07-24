import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { mongoConnect } from './db/index.js';

dotenv.config();
mongoConnect();

// import adminRouter from './routes/Admin.js'
// import userRouter from './routes/User.js'

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/admin", adminRouter);
// app.use("/user", userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`)
})