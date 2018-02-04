var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  appendKittens(name);
  }
destructivelyAppendKitten("Simone");