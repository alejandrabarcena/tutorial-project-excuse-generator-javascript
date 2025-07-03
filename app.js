window.onload = () => generateExcuse();

function generateExcuse() {
  let who = ['A two headed pinecone', 'The dog', 'My grandma', 'The mailman'];
  let action = ['yelled at', 'peed on', 'ate', 'broke'];
  let what = ['my sandwich', 'my homework', 'the car', 'my phone'];
  let when = ['in my house', 'before the class', 'while I was sleeping', 'during lunch'];

  let excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}`;
  document.getElementById('excuse').innerText = excuse;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
