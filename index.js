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
  return kitten.slice(0, kitten.length - 1);
}
