
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
    for (j = 0; j <= i; j++){
      str += j % 2 === 0 ? 1 : 0;
    }
    str += '\n';
  }