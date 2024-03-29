import bcryptjs from 'bcryptjs';
import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../../middlewares.js';
import {
  createUserByEmailAndPassword,
  deleteUser,
  findUserById,
  findUsers,
  updateUser,
} from './users.services.js';

const router = Router();

router.get('/', isAuthenticated, async (_req: Request, res: Response) => {
  const users = await findUsers();

  res.json({ users });
});

router.get('/:id', isAuthenticated, async (req: Request, res: Response) => {
  const user = await findUserById(req.params?.id);

  res.json({ user });
});

router.post('/', isAuthenticated, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await bcryptjs.hashSync(
    password,
    bcryptjs.genSaltSync(10),
  );
  const user = await createUserByEmailAndPassword(email, hashedPassword);

  res.json({ user });
});

router.put('/:id', isAuthenticated, async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await updateUser(req.params?.id, email);

  res.json({ user });
});

router.delete('/:id', isAuthenticated, async (req: Request, res: Response) => {
  const user = await deleteUser(req.params?.id);

  res.json({ user });
});

export default router;
