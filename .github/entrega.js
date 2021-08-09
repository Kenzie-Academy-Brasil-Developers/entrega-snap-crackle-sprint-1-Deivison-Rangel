// TAREFA OFICIAL //

function snapCrackle(maxValue){
    let resultado =""
    for (let i = 1; i <= maxValue; i++){
        
        if (i % 2 !==0 && i % 5 === 0){
            resultado+='SnapCrackle. '
        }

       else if (i % 2 !== 0) { 
            resultado+='Snap, '
        }

       else if (i % 5 === 0) {
            
            resultado+='Crackle, ' 
        }
        else{
            resultado+=`${i}, `
        }
        
        
    }
  console.log(resultado)
}

// TAREFA BONUS //

function snapCracklePrime(maxValue){
    let resultado =""
    for (let i = 1; i <= maxValue; i++){
       
        if (i % 2 !==0 && i === 5){
            resultado+='SnapCracklePrime, '
        }

        else if(i == 3){
            resultado+='SnapPrime, '
        }

        else if(i == 7 ){
            resultado+='SnapPrime, '
        }

        else if(i == 1 ){
            resultado+='Snap, '}
        else if(i == 2 ){
            resultado+='Prime, '}
        else if(i == 9 ){
            resultado+='Snap, '}
        else if(i == 11 ){
            resultado+='SnapPrime, '}
        else if(i == 13 ){
            resultado+='SnapPrime, '}
        else if(i == 15 ){
            resultado+='SnapPrime, '}
          
        
        else if (i % 5 === 0) {
            resultado+='Crackle, ' 
        }

        else {
            
            resultado+=`${i}, `
        }
    
    }
   console.log(resultado)
    
    
}