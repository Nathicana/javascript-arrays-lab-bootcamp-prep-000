var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  }
destructivelyAppendKitten("Simone");

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
destructivelyPrependKitten("Maxwell");

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
