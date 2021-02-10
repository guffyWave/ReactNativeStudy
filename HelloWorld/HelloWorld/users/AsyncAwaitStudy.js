//console.log('This is start of file');

export async function doWork() {
  console.log('Inside do work function');
  const response = await fetch('https://api.github.com/users');
  console.log('before response ');
  const users = await response.json();
  console.log('users resolved ');
  return users;
}

// console.log('Before calling doWork');
// let res = doWork();
// console.log('After calling doWork');
// console.log('Res', res);

// console.log('Last line of file');
