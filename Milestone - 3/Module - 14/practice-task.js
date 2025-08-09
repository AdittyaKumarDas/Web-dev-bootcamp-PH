const age = 61;
let busFare = 800;

if (age < 10) {
  busFare = 0;
  console.log("BusFare is free", busFare, "Tk");
} else if (age >= 11 && age <= 25) {
  busFare = busFare / 2;
  console.log("Busfare is: ", busFare, "Tk");
} else if (age >= 60) {
  busFare = busFare - (busFare * 15) / 100;
  console.log("BusFare is: ", busFare, "Tk");
} else {
  console.log("BusFare is: ", busFare, "Tk");
}
