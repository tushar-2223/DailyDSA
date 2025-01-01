// https://takeuforward.org/pattern/

let str = '';
let str2 = '';

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
    for (let j = i; j <= n; j++) {
      str += '*';
    }
    str += '\n';
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str2 += '*';
    }
    str2 += '\n';
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

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str2 += j;
    }
    str2 += '\n';
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
  for (i = 0; i <= n; i++) {
    for (j = i; j <= n; j++) {
      str += ' ';
    }
    for (k = 0; k <= i * 2; k++) {
      str += '*';
    }
    for (l = i; l <= n; l++) {
      str += ' ';
    }
    str += '\n';
  }

  return str;
}

function Pattern9(n) {
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= i; j++) {
      str += ' ';
    }

    for (k = 0; k <= 2 * (n - i); k++) {
      str += '*';
    }

    for (l = 0; l <= i; l++) {
      str += ' ';
    }

    str += '\n';
  }

  return str;
}

function Pattern10(n) {
    for (i = 0; i < 2 * n; i++) { 
        let totalCol = i < n ? i : 2 * n - i;

        for (let k = 0; k < n - totalCol; k++) {
            str += ' ';
        }

        for (let l = 0; l < 2 * totalCol - 1; l++) {
            str += '*';
        }
        str += '\n';
    }
  return str;
}

console.log(Pattern10(5));
