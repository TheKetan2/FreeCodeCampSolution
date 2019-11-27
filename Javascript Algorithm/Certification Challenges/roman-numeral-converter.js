function convertToRoman(num) {
  let romanNotation = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanConverted = "";
  for (let key in romanNotation) {
    while (num >= romanNotation[key]) {
      romanConverted += key;
      num -= romanNotation[key];
    }
  }
  return romanConverted;
}

convertToRoman(36);
