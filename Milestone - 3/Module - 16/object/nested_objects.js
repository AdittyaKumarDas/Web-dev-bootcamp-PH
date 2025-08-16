const andriodPhone = {
  brandName: "Samsung",
  modelName: "Samsung galaxy s24 ultra",

  internalDetails: {
    ram: "12 GB",
    rom: "256 GB",
    camera: "50 MP, 12 Mp, 8 Mp",

    batteryDetails: {
      battery: "5000 mah",
      charger: "45 watt",
    },
  },
};

// Access nested object details by Dot notation

console.log(andriodPhone.internalDetails.batteryDetails.battery);
console.log(andriodPhone);

// Access nested object details by bracket notation

console.log(andriodPhone["internalDetails"]["batteryDetails"]["battery"]);

// Update value of the keys

andriodPhone["internalDetails"]["batteryDetails"]["battery"] = "6000 mAh";

andriodPhone.internalDetails.ram = "16 GB";

andriodPhone["internalDetails"].rom = "512 GB";

// delete a keys

delete andriodPhone.brandName;

console.log(andriodPhone);
