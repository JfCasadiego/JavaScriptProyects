// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Make a object who has the caracteristics of a new microorganims

const pAequorFactory=(number, arrayDNA)=>{
  return{

    number:number,
    arrayDNA:arrayDNA,

    mutate: function(){
        let x= returnRandBase()
        let i = Math.floor(Math.random() * 15)

        while (x===this.arrayDNA[i]){
            x=returnRandBase();           
        };
        console.log(arrayDNA);      
        this.arrayDNA[i]=x;
        console.log(arrayDNA);      
    },
    compareDNA: function(firstOrganims, secontOrganism){
        let counter=0;
        //console.log(firstOrganims.arrayDNA);
        //console.log(secontOrganism.arrayDNA);
        for (let i=0; i<firstOrganims.arrayDNA.length;i++){
            
            if (firstOrganims.arrayDNA[i]===secontOrganism.arrayDNA[i]){
                counter += 1                
            }        
        }
        //console.log(counter);
        let result= ((counter/firstOrganims.arrayDNA.length)*100).toFixed(2);
        //console.log(result);
        return `specimen #1 and specimen #2 have ${result}% DNA in common.`
    },
    willLikelySurvive:function(organism){
        let counter=0;
        this.arrayDNA.forEach(letter => {
            if(letter ==="C" || letter==="G"){
                counter += 1;         
            }
        });
        counter = ((counter/this.arrayDNA.length)*100).toFixed(2);
        //console.log(counter);
        if(counter>=60){
            return true;
        } else{
            return false;
        }
    }
}; 
}

//let organimsPrimero = pAequorFactory(1,mockUpStrand())
//let organimsSegundo=pAequorFactory(2,mockUpStrand())
//console.log(organimsPrimero.arrayDNA);
//console.log(organimsPrimero.mutate());
//console.log(organimsPrimero.compareDNA(organimsPrimero,organimsSegundo));
//console.log(organimsPrimero.willLikelySurvive());



function generartePool(){
    
    let arreyDNALater =[]
    let save=0;
    let x=1;

    while (save<30){
    
        let test=pAequorFactory(x,mockUpStrand())
    
        if(test.willLikelySurvive()===true){
            arreyDNALater.push(test);
            save++
            x++
            
        }
        
    }
    return arreyDNALater;
}

console.log(generartePool())
 




