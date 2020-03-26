const controlStatements = () => {
  // 16 - control statements
  logMessage(16, 'control-statements', 'begin');
  const endPos = 5;
  let
    xPos = 0,
    enemyPos = 4;

  movePlayer({xPos,endPos,enemyPos});

  logMessage(16, 'control-statements', 'end');
}

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

export default controlStatements;

function logMessage(num, section, ext) {
  console.log(`${num}-${section}-${ext}`);
}

function movePlayer({xPos, endPos, enemyPos}) {
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




