import mongoose from "mongoose";
import { app } from "./app";
import { DATABASE_URL } from "./infra/database/mongoose/config";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.set("strictQuery", true).connect(DATABASE_URL);
    app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
