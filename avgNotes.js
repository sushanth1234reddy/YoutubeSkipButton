let input=[
{ name:"John", notes: [3,5,4]}
];
console.log(input);
let sum=0;
let avg=0
for(i of input){
    for(j of i.notes){
        sum=sum+j;
    }
    if(i.notes.length==0){
        avg=0;
        delete i.notes;
        i.avgNote=avg;
    }else{
    avg=(sum/i.notes.length);
    delete i.notes
    i.avgNote=avg;
    }
}
console.log(input);
