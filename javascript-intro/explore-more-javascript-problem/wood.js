function wooCaculater(chairQty,tableQty,bedQty){
const perChirWood = 3;
const perTableWood = 10;
const perBedWood = 50;

const ChirWood = perChirWood * chairQty;
const TabelWood = perTableWood * tableQty;
const BedWood = perBedWood * bedQty;
return ChirWood + TabelWood + BedWood;
}


const totalWoodRequired = wooCaculater(3,2,2); 
console.log('Total wood required:', totalWoodRequired);