function sum(){
    let sum=0;
    for(i=101;i<=999;i+=2){
        if(i%5==0){
        sum=sum+i
        }
    }
    console.log("Sum Of All Odd (Which Are Multiple Of 5)NAtural Number is :: "+sum)
}
sum()