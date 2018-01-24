let can = [["12x12", 10.99], ["16x16", 14.99]];
let fram = [["10x10", 8.99], ["12x12", 10.99], ["14x14", 12.99], ["16x16", 14.99], ["18x18", 16.99]];
let unfram = [["10x10", 10.99], ["12x12", 12.99], ["14x14", 14.99], ["16x16", 16.99], ["18x18", 18.99]];

const canvas = new Map(can)
console.log(canvas);
console.log(canvas.keys())
console.log(canvas.get("12x12"));
