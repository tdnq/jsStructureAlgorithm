function Node(element) {
    this.element = element;
    this.next = null;
}

function LoopLinkList() {
    this.head = null;
    this.count = 0;
}
LoopLinkList.prototype = {
    constuctor: LoopLinkList,
    removeAt:function(index){
        if(index>=0&&index<this.count){
            let removeNode;
            if(index===0){
                //原链表节点数是否为1
                removeNode = this.head;
                if(this.count===1){
                    this.head=null;
                }else{
                    let tail=this.getElementAt(this.count-1);
                    this.head=this.head.next;
                    tail.next=this.head;
                }
            }else{
                removeNode=this.getElementAt(index);
                let previous = this.getElementAt(index-1);
                previous.next=previous.next.next;
                
            }
            this.count--;
            return removeNode;
        }
        return null;
    },
    insert: function (element, index) {
        if (index >= 0 && index <= this.count) {
            let node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (current === null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    this.head = node;
                    //count未加1，但实际数量为2；
                    let tail = this.getElementAt(this.size());
                    tail.next = this.head;
                }
            } else {
                let previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return node;
        }
        return null;
    },
    getElementAt: function (index) {
        // index可等于2是为了防止insert时count没有加1当是需要找到链尾
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (current) {
                for (let i = 0; i < index; i++) {
                    current = current.next;
                }
            }
            return current;
        }
        return null;
    },
    size: function () {
        return this.count;
    }
}
module.exports = LoopLinkList;