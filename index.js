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
return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var arrayNew = [...kittens, "Broom"];
  return arrayNew;
}

function prependKitten(name){
  var arrayNew = ["Arnold", ...kittens];
  return arrayNew;
}
