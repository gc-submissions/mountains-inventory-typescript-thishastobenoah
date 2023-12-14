export interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

export function findNameOfTallestMountain(mountains: Mountain[]):string{
    if(mountains.length === 0){
        return "";
    }

    let tallestMountain = mountains[0];

    for(let i = 1; i < mountains.length; i++){
        if(mountains[i].height > tallestMountain.height){
            tallestMountain = mountains[i];
        }
    }

    return tallestMountain.name;
}


const result = findNameOfTallestMountain(mountains);

console.log(result);