let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let passportWithAddressTwo = {};
for (let key in passportWithAddress) {
  passportWithAddressTwo[key] = passportWithAddress[key];
}
passportWithAddressTwo.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportWithAddressTwo.address.city);
