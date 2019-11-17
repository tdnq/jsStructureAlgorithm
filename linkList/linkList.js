function Node(value) {
    this.element = value;
    this.next = null;
}

function LinkList() {
    this.head = null;
    this.count = 0;
}
LinkList.prototype = {
    constuctor: LinkList,
    push: function (element) {
        let ele = new Node(element);
        if (this.head === null) {
            this.head = ele;
        } else {
            let head = this.head;
            while (head.next) {
                head = head.next;
            }
            head.next = ele;
        }
        this.count++;
        return ele.element;
    },
    removeForPos: function (pos) {
        if (pos < this.count && pos >= 0) {
            let current = this.head;
            if (pos === 0) {
                current == current.next;
            } else {
                let previous;
                for (let i = 0; i < pos; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
    },
    indexOf: function (value) {
        let current = this.head;
        for(let i=0;current;i++){
            if(current.element===value){
                return i;
            }
            current=current.next;
        }
        return -1;
    },
    getElementAt: function (index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return null;
    },
    insert: function(element,index){
        if(index>=0&&index<=this.count){
            let node = new Node(element);
            if(index===0){
                let current = this.head;
                node.next = current;
                this.head=node;
            }else{
                let previous = this.getElementAt(index-1);
                let current = previous.next;
                previous.next=node;
                node.next=current;
            }
            this.count++;
            return this.count;
        }
    },
    size:function(){
        return this.count;
    }
}

const linkList = new LinkList();
