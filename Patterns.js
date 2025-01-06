/** @format */

// https://takeuforward.org/pattern/

let str = '';

function Pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}

function Pattern2(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}

function Pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += '\n';
  }

  return str;
}

function Pattern4(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += '\n';
  }

  return str;
}

function Pattern5(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}

function Pattern6(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += '\n';
  }

  return str;
}

function Pattern7(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      str += j;
    }
    str += '\n';
  }
}

function Pattern8(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      str += ' ';
    }
    for (let k = 0; k <= i * 2; k++) {
      str += '*';
    }
    for (let l = i; l <= n; l++) {
      str += ' ';
    }
    str += '\n';
  }

  return str;
}

function Pattern9(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      str += ' ';
    }

    for (let k = 0; k <= 2 * (n - i); k++) {
      str += '*';
    }

    for (let l = 0; l <= i; l++) {
      str += ' ';
    }

    str += '\n';
  }

  return str;
}

//dimand pattern
const Pattern10 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    let totalCol = i < n ? i : 2 * n - i;

    for (let j = 0; j < n - totalCol; j++) {
      str += ' ';
    }

    for (let k = 0; k < 2 * totalCol - 1; k++) {
      str += '*';
    }

    for (let l = 0; l < n - totalCol; l++) {
      str += ' ';
    }

    str += '\n';
  }
  return str;
};

const Pattern11 = (n) => {
  for (let i = 0; i <= 2 * n; i++) {
    let totalCol = i <= n ? i : 2 * n - i;

    for (let j = 0; j <= totalCol; j++) {
      str += '*';
    }

    str += '\n';
  }
  return str;
};

const Pattern12 = (n) => {
  for (let i = 0; i <= n; i++) {
    for (j = 0; j <= i; j++) {
      str += j % 2 === 0 ? 1 : 0;
    }
    str += '\n';
  }
  return str;
};

const Pattern13 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      str += j;
    }

    for (let k = 0; k <= 2 * (n - i); k++) {
      str += '*';
    }

    for (let l = i; l >= 1; l--) {
      str += l;
    }

    str += '\n';
  }
  return str;
};

const Pattern14 = (n) => {
  for (let i = 1; i <= n; i++) {
    let char = 65;
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(char);
      char++;
    }
    str += '\n';
  }

  return str;
};

const Pattern15 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    let noOfCol = i < n ? i : 2 * n - i;

    for (let j = 0; j < noOfCol; j++) {
      str += '*';
    }

    for (let k = 2 * n; k > 2 * noOfCol; k--) {
      str += ' ';
    }

    for (let l = 0; l < noOfCol; l++) {
      str += '*';
    }

    str += '\n';
  }

  return str;
};

const Pattern16 = (n) => { 
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
      if (i === 1 || i === n || j === 1 || j === n){
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }

return str;
};

const Pattern17 = (n) => { 
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
      if (i === 1 || i === n || j === 1 || j === n || i === j || i + j === n + 1){
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }

  return str;
}

console.log(Pattern17(5));
