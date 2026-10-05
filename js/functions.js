const normString = function(stringt, num){
  if (stringt.length <= num){
    return true;

  }else{
    return false;
  }

};

normString('fffаа', 5);


function Palindrome(str) {
  const cleanStr = str.toLowerCase();
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
Palindrome('Топот');
