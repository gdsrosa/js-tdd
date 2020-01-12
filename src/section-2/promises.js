const defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const boo = true;
    if (boo) {
      resolve('Running');
    } else {
      reject(new Error('error'));
    }
  }, 2000);
});

defer
  .then(data => {
    console.log(data);
    return 'fooo';
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
