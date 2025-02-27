let passedLevels = [];

passedLevels.push(localStorage.getItem("level1passed"));
passedLevels.push(localStorage.getItem("level2passed"));
passedLevels.push(localStorage.getItem("level3passed"));


let rat = [1, 2, 3];

console.log(rat.map((i) => i >= 2))
