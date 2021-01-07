import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import { randomInt } from "crypto";

const router = Router();

const lotto = () => {
  let powerBall = [0,0,0,0,0];
  let powerObj = {};
  let place = randomInt(69);
  let basket = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 
    63, 64, 65, 66, 67, 68, 69, 70, 0
  ];

  powerBall.forEach(function(part, index, theArray) {
    theArray[index] = basket[place];
    basket[place] = 0;
    place = randomInt(69);

    while(basket[place] === 0) {
      place = randomInt(69);
    }
  });

  powerBall.sort((a , b) => {
    return (a > b) ? 1 : -1;
  });

  powerBall.push(randomInt(26) + 1);
  powerObj[0] = powerBall;

  return powerObj;
};


/* GET users listing. */
router.get('/', (req, res) => {
  let page = req.query.draws;
  let dataObject = {};
  for(let i = 0; i < page; i++) {
    console.log(i, page);
    dataObject[i] = lotto();
  }
  return res.json(dataObject);
  //return res.send(Object.values(req.context.models.users));
});

router.post("/", (req, res) => {
  const n = randomInt(30);
  const j = randomInt(45);
  res.send(`The sum is: ${n + j}`);
});

export default router;