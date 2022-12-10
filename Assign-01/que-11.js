let tc,d;
tc=prompt("Enter Total Amount");
if(tc<=2000){
    let discount=(5/100)*tc;
    let pa = tc-discount;
    document.write("Your Total Amount is :: Rs - "+tc+"<br>"+"Your Discount Is (5%) :: Rs - "+discount+"<br>"+"Your Payble Amount is :: Rs - "+pa) 
}
else if(tc>2000 && tc<=5000){
    let discount=(25/100)*tc;
    let pa = tc-discount;
    document.write("Your Total Amount is :: Rs - "+tc+"<br>"+"Your Discount Is (25%) :: Rs - "+discount+"<br>"+"Your Payble Amount is :: Rs - "+pa) 
}
else if(tc>5000 && tc<=10000){
    let discount=(35/100)*tc;
    let pa = tc-discount;
    document.write("Your Total Amount is :: Rs - "+tc+"<br>"+"Your Discount Is (35%) :: Rs - "+discount+"<br>"+"Your Payble Amount is :: Rs - "+pa) 
}
else{
    let discount=(50/100)*tc;
    let pa = tc-discount;
    document.write("Your Total Amount is :: Rs - "+tc+"<br>"+"Your Discount Is (50%) :: Rs - "+discount+"<br>"+"Your Payble Amount is :: Rs - "+pa) 
}