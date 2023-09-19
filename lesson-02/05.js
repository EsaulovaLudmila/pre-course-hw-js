let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passport1 = {};
for (let key in passport) {
  passport1[key] = passport[key];
}
passport1.name = "Ivan";

console.log(passport.name);
console.log(passport1.name);
