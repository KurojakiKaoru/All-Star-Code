let student = {
    fullName: "Kurojaki Koaru",
    age: 17,

    code: function() {
        console.log("The Black Swordsman");
        return "The Black Swordsman";
    }
}
console.log(student.fullName);
console.log(student['age']);
console.log(student.fullName + " " + student.code());