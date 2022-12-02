class Emp {
    pf1; name; basicsal; pf; da; ta; hra; gsal; empno;
    i = () => {
        this.empno = prompt("Enter Employee number")
        this.name = prompt("Enter Your Name")
        this.basicsal = prompt("Enter Basic Salary")
    }
    d = () => {
        document.write("Name :: " + this.name + "<br>" + "<br>")
        document.write("Basic Salary :: " + this.basicsal + "<br>" + "<br>")
        document.write("PF Deduct :: " + this.pf1 + "<br>" + "<br>")
        document.write("Gross Salary :: " + this.gsal + "<br>" + "<br>")
    }
    c = () => {
        if (this.basicsal < 10000) {
            this.pf = 7;
            this.da = 40;
            this.ta = 8;
            this.hra = 14;

        }
        else if (this.basicsal >= 10000 && this.basicsal < 20000) {
            this.pf = 7.5;
            this.da = 45;
            this.ta = 10;
            this.hra = 12;
        }
        else {
            this.pf = 7.5;
            this.da = 45;
            this.ta = 10;
            this.hra = 12;
        }
        this.pf1 = ((this.pf / 100) * this.basicsal)
        this.da1 = ((this.da / 100) * this.basicsal)
        this.ta1 = ((this.ta / 100) * this.basicsal)
        this.hra1 = ((this.hra / 100) * this.basicsal)
        this.gsal = ((Number(this.basicsal) + Number(this.ta1) + Number(this.da1) + Number(this.hra1)) - this.pf1)

    }

}
e1 = new Emp;
e1.i();
e1.c();
e1.d();