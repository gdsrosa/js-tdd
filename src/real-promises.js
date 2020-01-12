const fetch = require('node-fetch');

const posts = fetch('https://randomuser.me/api/');

console.log(posts);
