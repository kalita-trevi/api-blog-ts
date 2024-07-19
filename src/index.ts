import express from "express";
import postRoutes from "./posts.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
