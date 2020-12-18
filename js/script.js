

let response = await fetch('https://github.com/amer1can/movee/post.js');

if (response.ok) {
  let json = response.json();
  console.log(json[0]);
} else alert('Error: ' + response.status);