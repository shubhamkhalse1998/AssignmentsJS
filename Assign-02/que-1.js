class employee{
    constructor(b){
        this.basic=b;;
    }
    s=()=>{
        let pf,gp,np,hra,da;
        da=(25/100)*this.basic;
        hra=(15/100)*this.basic;
        pf=(8.33/100)*this.basic;
        np=this.basic+da+hra
        gp=np-pf;
        console.log("Gross pay :: "+gp)
    }
}
let e1=new employee(40000)
e1.s()
