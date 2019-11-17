function Node (element ){
    this.prev = null;
    this.next = null;
    this.element = element;
}
function doublyLinkList (){
    this.head = null;
    this.tail = null;
    this.count = 0;
}

doublyLinkList.prototype={
    cunstuctor:doublyLinkList,
    insert: function(element,index){
        if(index<=this.count&&index>=0){
            const node =new Node(element);
            let current = this.head;
            if(index===0){
                if(this.head===null){
                    this.head=node;
                    this.tail = node;
                }else{
                    this.head = node;
                    current.prev=node;
                    node.next=current;
                }
            }else if(index=this.count){
                current = this.tail;
                // preious = 
                current.next = node;
                current.prev = node;
                // node.prev = 

            }else{
                let current = this.head;
                let preious;
                for(let i=0;i<index;i++){
                    preious = current;
                    current = current.next;
                }
                preious.next = node;
                node.prev = preious;
                node.next = current;
                if(current){
                    current.prev = node;
                }
            }
            this.count++;
        }
    }
}