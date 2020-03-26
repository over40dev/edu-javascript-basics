const whileLoops = () => {
  // 15-while-loops
  logMessage(15, 'while-loops', 'begin');
  const endPos = 5;
  let
    xPos = 0,
    enemyPos = 4,
    isGameOver = false;

  while (!isGameOver) {
    xPos++;
    console.log(xPos);
    if (xPos >= endPos || xPos === enemyPos) {
      isGameOver = true;
    }
  }
  logMessage(15, 'while-loops', 'end');
}

const controlStatements = () => {
  // 16 - control statements
  logMessage(16, 'control-statements', 'begin');
  const endPos = 5;
  let
    xPos = 0,
    enemyPos = 4;

  movePlayer({ xPos, endPos, enemyPos });

  logMessage(16, 'control-statements', 'end');
}

const forLoops = () => {
  logMessage(17, 'for-loops', 'begin');
  const items = ['Axe', 'Shirt', 'Knife'];
  let finalString = 'In my inventory, I have ';

  // for loop
  // for (let i = 0; i < items.length; i++) {
  //   finalString += (i+1 < items.length) ? `${items[i]}, ` : `and ${items[i]}!`;
  // }

  // [].forEach()
  items.forEach((item, i) => {
    finalString += (i+1 < items.length) ? `${items[i]}, ` : `and ${items[i]}!`; 
  });

  logMessage(17, 'for-loops', finalString);
  logMessage(17, 'for-loops', 'end');
}

export default forLoops;

function logMessage(num, section, ext) {
  console.log(`${num}-${section}-${ext}`);
}

function movePlayer({ xPos, endPos, enemyPos }) {
  while (xPos < endPos) {
    xPos++;
    if (xPos % 2 === 1) {
      continue
    }
    if (xPos === enemyPos) {
      logMessage(16, 'control-statements', 'contact');
      break;
    }
  }
}




