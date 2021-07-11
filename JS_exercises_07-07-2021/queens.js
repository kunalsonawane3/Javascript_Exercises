function queenAttack(wPos, bPos){
    this.white = wPos;
    this.black = bPos;

    this.canAttack = () => {
        if ((this.white[0] == this.black[0]) && (this.white[1] == this.black[1])){ 
            console.log("Queens can not share same space.");
            return null;
        }
        if ((this.white[0] == this.black[0]) || (this.white[1] == this.black[1])){ return true;}
    
        if (Math.abs(this.white[0] - this.white[1]) == Math.abs(this.black[0] - this.black[1])){ return true;}
    
        return false;
    }
}


let q = new queenAttack([3,2],[5,6])
console.log(q.canAttack());
