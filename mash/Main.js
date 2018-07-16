
const Version = "v1.0.0";

function mash() {
    return getHome();
}

function getHome(input) {
    let extra = input;
    let randomize = Math.floor(Math.random() * 5);
    let randomHome = ["Mansion", "Apartment", "Shack", "House", extra];
    
    if(randomHome[randomize] == undefined) {
        extra = "(Choose a Home)";
        return extra;
    }else{
        return randomHome[randomize];
    }
}

function getChildrenCount(chance) {
    let randomize = Math.floor(Math.random() * 100);
    let fifty = Math.floor(Math.random() * 100)
    if(fifty < 50) {
        if(chance == undefined) {
            chance = "(Choose an Amount)";
            return chance;
        }
        return chance;
    }else {
        return randomize;
    }
}

function getCar(input) {
    let extra = input;
    let randomize = Math.floor(Math.random() * 7);
    let car = ["Lambo", "Patty Wagon", "Octane", "Dominus", "Box of Wheels", "Convertible", extra];
    if(car[randomize] == undefined) {
        extra = "(Choose a Car)";
        return extra;
    }else{
        return car[randomize];
    }
}
function getSchool(input) {
    let extra = input;
    let randomize = Math.floor(Math.random() * 7);
    let school = ["NYU", "Boston University", "Queensborough Community College", "Queens College", extra];
    if(school[randomize] == undefined) {
        extra = "(Choose a School)";
        return extra;
    }else{
        return school[randomize];
    }
}
function getDegree(input) {
    let extra = input;
    let randomize = Math.floor(Math.random() * 7);
    let degree = ["Associates", "Bachelors", "Masters", "Doctorates", extra];
    if(degree[randomize] == undefined) {
        extra = "(Choose a Degree)";
        return extra;
    }else{
        return degree[randomize];
    }
}

function getAge(chance) {
    let randomize = Math.floor(Math.random() * 100);
    let fifty = Math.floor(Math.random() * 100)
    if(fifty < 50) {
        if(chance == undefined) {
            chance = "(Choose a Age)";
            return chance;
        }
        return chance;
    }else {
        return randomize;
    }
}

console.log("You will live in a " + getHome(process.argv[2]) + ", and you will have " + getChildrenCount(process.argv[3]) + " kids!" + ", and you'll drive a " + getCar(process.argv[4]) + ". You will go to " + getSchool(process.argv[5]) + " and will get a " + getDegree(process.argv[6]) + " degree. You will die at " + getAge(process.argv[7]) + ".");
