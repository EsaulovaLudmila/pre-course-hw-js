let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

console.log(passportWithAddress.address.city);

let passportWithAddressTwo = {};
for (let key in passportWithAddress) {
  passportWithAddressTwo[key] = passportWithAddress[key];
}
passportWithAddressTwo.address.city = "Bobryisk";

console.log(passportWithAddressTwo.address.city);
