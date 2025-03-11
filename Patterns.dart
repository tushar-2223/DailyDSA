void main() {
  print(Pattern10(5));
}

String Pattern1(int n) {
  String str = '';

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}

String Pattern2(int n) {
  String str = '';

  for (int i = 0; i <= n; i++) {
    for (int j = 0; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}

String Pattern3(int n) {
  String str = '';

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      str += i.toString();
    }
    str += '\n';
  }

  return str;
}

String Pattern4(int n) {
  String str = '';

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      str += j.toString();
    }
    str += '\n';
  }

  return str;
}

String Pattern5(int n) {
  String str = '';
  // String str2 = '';

  for (int i = 1; i <= n; i++) {
    for (int j = i; j <= n; j++) {
      str += '*';
    }
    str += '\n';
  }

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      // str2 += '*';
    }
    // str2 += '\n';
  }

  return str;
}

String Pattern6(int n) {
  String str = '';

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      str += j.toString();
    }
    str += '\n';
  }

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {}
  }

  return str;
}

String Pattern7(int n) {
  String str = '';

  for (int i = 1; i <= n; i++) {
    for (int j = i; j <= n; j++) {
      str += j.toString();
    }
    str += '\n';
  }

  return str;
}

String Pattern8(int n) {
  String str = '';

  for (int i = 0; i <= n; i++) {
    for (int j = i; j <= n; j++) {
      str += ' ';
    }
    for (int k = 0; k <= i * 2; k++) {
      str += '*';
    }
    for (int l = i; l <= n; l++) {
      str += ' ';
    }
    str += '\n';
  }

  return str;
}

String Pattern9(int n) {
  String str = '';

  for (int i = 0; i <= n; i++) {
    for (int j = 0; j <= i; j++) {
      str += ' ';
    }

    for (int k = 0; k <= 2 * (n - i); k++) {
      str += '*';
    }

    for (int l = 0; l <= i; l++) {
      str += ' ';
    }

    str += '\n';
  }

  return str;
}

String Pattern10(int n) {
  String str = '';

  for (int i = 0; i < 2 * n; i++) {
    int totalCol = i < n ? i : 2 * n - i;

    for (int k = 0; k < n - totalCol; k++) {
      str += ' ';
    }

    for (int l = 0; l < 2 * totalCol - 1; l++) {
      str += '*';
    }
    str += '\n';
  }

  return str;
}
