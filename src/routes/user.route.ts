import { Router } from 'express';

import newUser from '../controllers/user.controller';

const router = Router();

router.post('/', newUser);

export default router;