class juice{
    pcode;flavour;psize;ptype;pprice;
    i=()=>{
        this.pcode=prompt("Enter PRoduct Code")
        this.flavour=prompt("Enter Flavour ")
        this.psize=prompt("Enter PAck Size")
        this.ptype=prompt("Enter PAck Type")
        this.pprice=prompt("Enter Price")
    }
    d=()=>{
        document.write("Product Code :: "+this.pcode+"<br>"+"<br>")
        document.write("Juice Flavour :: "+this.flavour+"<br>"+"<br>")
        document.write("PAck Size :: "+this.psize+"<br>"+"<br>")
        document.write("Pack Type :: "+this.ptype+"<br>"+"<br>")
        document.write("Price :: Rs -  "+this.pprice+"<br>"+"<br>")
    }
    c=()=>{
        this.pprice-=10
    }
}
j1=new juice;
j1.i();
j1.c();
j1.d();