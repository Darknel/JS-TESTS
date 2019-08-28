/* const Start = 'Cool JavaScript';
let Result = '';
for (x = 0; x < Start.length; x++) {
  if (Start[x] == 'o') {
    Start[x] = '0';
  } else if (Start[x] == 'i') {
    Result[x] += 1;
  } else if (Start[x] == 'a') {
    Result[x] += 4;
  } else {
    Result += Start[x];
  }
}
console.log(Result); */

const words = ['зад', 'банан', 'яблоко', 'персик', 'буква', 'слово'];
const ChoosenWord = words[Math.floor(Math.random() * words.length)];
const Result = [];
for (let i = 0; i < ChoosenWord.length; i++) {
  Result[i] ='_';
}
let remainingLetters = ChoosenWord.length;
let tryCount = 3;
while (remainingLetters > 0 && tryCount > 0) {
  alert(Result.join(' '));
  const guess = prompt('Угадай букву');
  if (guess === null || tryCount == 0) {
    alert('Игра завершена');
    break;
  } else if (guess.length !==1) {
    alert('Введите только один символ');
  } else {
    for (let j = 0; j < ChoosenWord.length; j++) {
      if (ChoosenWord[j] === guess.toLowerCase()) {
        Result[j] = guess.toLowerCase();
        remainingLetters--;
      }
      if (ChoosenWord[j] !== guess.toLowerCase()) {
        tryCount= tryCount - 1;
      }
      alert('У вас осталось ' + tryCount + ' попытки');
    }
  }
}
if (tryCount === 0) {
  alert('Game over');
}
if (remainingLetters == 0) {
  alert(Result.join(' '));
  alert('Ураа! Было отгадано слово ' + ChoosenWord);
}
