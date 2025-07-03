window.onload = () => {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed on', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car', 'my sandwich'];
  const when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];

  const excuse =
    who[Math.floor(Math.random() * who.length)] + ' ' +
    action[Math.floor(Math.random() * action.length)] + ' ' +
    what[Math.floor(Math.random() * what.length)] + ' ' +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById('excuse').innerText = excuse;
};

