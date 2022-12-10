function prime(num){
for(i=2;i<=num;i++){
    if(num%i==0){
        return "Not A Prime Number"
    }
    else{
        return "Prime Number"
    }
}
}
let result=prime(24)
console.log(result)
