interface Mountain{
    name:string;
    height:number;
}

let mountain1:Mountain = {
    name:"Kilimanjaro",
    height:19341
}

let mountain2:Mountain = {
    name:"Everest",
    height:29029
}

let mountain3:Mountain = {
    name:"Denali",
    height:20310
}

let mountains:Mountain[] = [mountain1, mountain2, mountain3];

function findNameOfTallestMountain(arrayM:Mountain[]):string {

    let tallest:number =0;
    let tallMountain:string = "";

    for (let m of arrayM) {
        if (m.height > tallest) {
            tallest = m.height;
            tallMountain = m.name;
        }
    }

    return tallMountain;
}

let tallestMountain:string = findNameOfTallestMountain(mountains);

console.log(tallestMountain);