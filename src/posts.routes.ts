import express, { Request, Response } from "express";
import { InMemoryRepository } from "./in-memory.repository";

const router = express.Router();
const postsRepository = new InMemoryRepository();

// rota listagem de posts
router.get("/", async (req: Request, res: Response) => {
  const posts = await postsRepository.findAll();
  res.json(posts);
});

// rota de busca de um post
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postsRepository.findById(id);
  res.json(post);
});

// Rota: Criando uma postagem
router.post("/", async (req: Request, res: Response) => {
  const { titulo, thumbnail, hora, autor, categoria, conteudo } = req.body;
  const newPost = await postsRepository.create({
    titulo,
    thumbnail,
    hora,
    autor,
    categoria,
    conteudo,
  });
  res.status(201).json(newPost);
});

// Rota: Deletando uma postagem
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedPost = await postsRepository.delete(id);
  res.json(deletedPost);
});

// Rota: Atualizando uma postagem
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, thumbnail, hora, autor, categoria, conteudo } = req.body;
  const updatedPost = await postsRepository.update(id, {
    titulo,
    thumbnail,
    hora,
    autor,
    categoria,
    conteudo,
  });
  res.json(updatedPost);
});

export default router;
