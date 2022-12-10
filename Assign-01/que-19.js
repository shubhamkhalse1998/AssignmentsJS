function fibo(n){
    let first=2;
    let second=1;
    
for(i=0;i<=n;i++){
    
    console.log(first);
    next=first+second
    first=second
    second=next   
}
}
fibo(10)