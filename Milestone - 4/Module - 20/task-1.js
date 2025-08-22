function temperature(celcius) {
  let farenheight;

  farenheight = celcius * (9 / 5) + 32;

  return farenheight;
}

const celcius = 100;
console.log(temperature(celcius));
