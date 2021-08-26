var maxtrix=[[15,3,9],[55,4,6],[76,1,2]];
var maxtrix2= [[1,10,3],[9,3,3],[4,5,8]];
function saddleElement(matrix){
    for(let i in maxtrix){
        for(let j in maxtrix[i]){
            if(checkSaddle(matrix[i][j],i,j)==1){
                return true;
            }

        }
    }
    return false;

}
function checkSaddle(num,i,j){
    let numMax=0, numMin=999999;
    
    for(let k=0;k<maxtrix.length;k++){
        if(maxtrix[i][k]<numMin){
            numMin=maxtrix[i][k];
        }
        if(maxtrix[k][j]>numMax){
            numMax=maxtrix[k][j];
        }
    }
    if(numMax==numMin&& numMax==num){
        return 1;
    }else{
        return 0;
    }
    
}
console.log(saddleElement(maxtrix));
console.log(saddleElement(maxtrix2));