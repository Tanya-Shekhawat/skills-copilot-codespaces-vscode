function skillsMember() {
  var member = {
    name: "Terry",
    age: 25,
    skills: ["JavaScript", "CSS", "HTML", "Python", "C++"],
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    dateOfBirth: function () {
      // code here
    },
  };
  // Code here
  console.log(member.skills[1]);
  console.log(member.address.city);
  console.log(member.dateOfBirth());
}