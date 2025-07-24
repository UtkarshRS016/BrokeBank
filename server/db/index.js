import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoConnect = () => {
 mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error = ", err))
};

export { mongoConnect };
