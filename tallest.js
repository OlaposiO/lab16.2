var mountain1 = {
    name: "Kilimanjaro",
    height: 19341
};
var mountain2 = {
    name: "Everest",
    height: 29029
};
var mountain3 = {
    name: "Denali",
    height: 20310
};
var mountains = [mountain1, mountain2, mountain3];
function findNameOfTallestMountain(arrayM) {
    var tallest = 0;
    var tallMountain = "";
    for (var _i = 0, arrayM_1 = arrayM; _i < arrayM_1.length; _i++) {
        var m = arrayM_1[_i];
        if (m.height > tallest) {
            tallest = m.height;
            tallMountain = m.name;
        }
    }
    return tallMountain;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
