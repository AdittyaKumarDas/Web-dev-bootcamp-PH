const andriodPhone = {
  brandName: "Samsung",
  modelName: "Samsung galaxy s24 ultra",
  ram: "12 GB",
  rom: "256 GB",
  battery: "5000 mah",
  charger: "45 watt",
  camera: "50 MP, 12 Mp, 8 Mp",
};

// 1st system of looping in objects
for (const value in andriodPhone) {
  console.log(value, "---->", andriodPhone[value]);
}

// 2nd System of looping in objects

const keys = Object.keys(andriodPhone);

for (const key of keys) {
  console.log(key, "--->", andriodPhone[key]);
}
