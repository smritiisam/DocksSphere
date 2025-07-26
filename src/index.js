// This is the "entry point" - what actually runs when you start the app

import { createServer } from "./server.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  await connectDB(); // 1. Connect to database first

  const app = createServer(); // 2. Create the Express app
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`API ready at http://localhost:${PORT}`)); // 3. Start listening for requests
})();
