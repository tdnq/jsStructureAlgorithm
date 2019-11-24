function Node (element ){
    this.prev = null;
    this.next = null;
    this.element = element;
}
function DoublyLinkList (){
    this.head = null;
    this.tail = null;
    this.count = 0;
}

DoublyLinkList.prototype={
    cunstuctor:DoublyLinkList,
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
            }else{
                let previous;
                for(let i=0;i<index;i++){
                    previous = current;
                    current = current.next;
                }
                // 是否为链尾
                if(current===null){
                    previous.next = node;
                    node.prev=previous;
                    this.tail=node;
                }else{
                    node.prev = previous;
                    node.next = previous.next;
                    previous.next.prev = node;
                    previous.next=node;
                }
            }
            this.count++;
            return this.head;
        }
        return null;
    },
    getNodeAt(index){
        if(index>=0&&index<this.count){
            let current = this.head;
            for(let i=0;i<index;i++){
                current = current.next;
            }
            return current;
        }
        return null;
    }
}

module.exports = {DoublyLinkList,Node};