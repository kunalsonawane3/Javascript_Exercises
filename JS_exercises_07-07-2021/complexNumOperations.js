function complex(x, y) {
    this.real = x;
    this.imag = y;
    
    
    this.toString = () => {
        return `${this.real}${this.imag>0?` + ${Math.abs(this.imag)}i`:this.imag<0?` - ${Math.abs(this.imag)}i`:''}`;
    }

    this.add = (c) => {return new complex(this.real+c.real, this.imag+c.imag);}

    this.sub = (c) => {return new complex(this.real-c.real, this.imag-c.imag);}

    this.multi = (c) => {
        return new complex(this.real*c.real - this.imag*c.imag, this.real*c.imag + this.imag*c.real);
    }

    this.div = (c) => {
        let squares = c.real**2 + c.imag**2;
        return new complex((this.real*c.real + this.imag*c.imag)/squares, (this.imag*c.real - this.real*c.imag)/squares);
    }

}

c1 = new complex(2, 2);
//let res = com.div(new complex(1, 1));
console.log("Addition: ",c1.add(new complex(1, 1)).toString());
console.log("Subtraction: ",c1.sub(new complex(1, 1)).toString());
console.log("Multiplication: ",c1.multi(new complex(1, 1)).toString());
console.log("Division: ",c1.div(new complex(1, 1)).toString());

