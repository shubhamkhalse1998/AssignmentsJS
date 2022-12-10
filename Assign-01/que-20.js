function fibo(n){
    let first=0;
    let second=1;
    
for(i=1;i<=n;i++){
    console.log(first);
    next=first+second
    first=second
    second=next    
}
}
fibo(6)