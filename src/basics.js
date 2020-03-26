
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

export default whileLoops;

function logMessage(num, section, ext) {
  console.log(`${num}-${section}-${ext}`);
}




