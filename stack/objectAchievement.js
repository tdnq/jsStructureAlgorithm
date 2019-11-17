function Stack(){
    this.count=0;
    this.items={};
}
Stack.prototype={
    constructor:Stack,
    push: function(element){
        this.items[this.count] = element;
        this.count++;
    },
    pop:function(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const delEle=this.items[this.count];
        delete this.items[this.count];
        return delEle;
    },
    peek:function(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    },
    isEmpty:function(){
        return this.count===0;
    },
    clear:function(){
        if(this.count===0){
            return;
        }
        this.count=0;
        this.items={};
    },
    size:function(){
        return this.count;
    },
    toString:function(){
            let string="";
            for(let i=0;i<this.count;i++){
                string+=`${this.items[i]},`;
            }
            string=string.slice(0,-1);
            return string;
    }

}
module.exports = Stack;