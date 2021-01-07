import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const user = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.users[id] = user;

  return res.send(message);
});

/*
router.delete('/:userId', (req, res) => {
  const {
    [req.params.userId]: message,
    ...otherMessages
  } = req.context.models.users;

  req.context.models.messages = otherMessages;

  return res.send(message);
});
*/
export default router;