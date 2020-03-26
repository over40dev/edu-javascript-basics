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

const objects = () => {
  const gameChar = {
    name: 'Ted',
    type: 'Human',
    health: 100,
    get title() {
      return `${this.name}, the ${this.type}`;
    },
    get myHealth() {
      let msg = `My health is ${this.health}`;
      return msg.toUpperCase();
    },
    set maxHealth(h) {
      this.health = h;
    },
    xPos: 0,
    items: ['Knife', 'Food'],
    move: function(x) {
      console.log(this);
      this.xPos += x;
    },
  }

  logMessage(18, 'objects', 'name: ', gameChar.name);
  gameChar.items.push('Axe', 'Water');
  logMessage(18, 'objects', 'items: ', gameChar.items);
  
  gameChar.yPos = 5;
  const gc = gameChar;

  gc.maxHealth = 150;
  console.log('health: ', gc.myHealth);
  console.log('maxHealth: ', gc.maxHealth);

  logMessage(18, 'objects', 'title: ', gc.title, gameChar.title, gc.name === gameChar.name);
  
  gc.moveXY = function(x,y) {
    this.xPos += x;
    this.yPos += y;
  };

  gameChar.move(5);
  gameChar.moveXY(10, 10);
  gc.name = 'unwise change --- ref not copy';

  logMessage(18, 'objects', 'gameChar: ', gameChar, 'gc: ', gc);
}

export default objects;

function logMessage(num, section, ext, ...rest) {
  console.log(`${num}-${section}-${ext}`, ...rest);
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




