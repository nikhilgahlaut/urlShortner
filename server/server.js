import app from "./app.js";
import dotenv from "dotenv";
import { connectToMongoDB } from "./config.js";

dotenv.config();
//console.log(process.env.PORT);

const PORT = process.env.PORT || 4001;

await connectToMongoDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});