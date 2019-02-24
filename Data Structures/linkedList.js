class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertToStart(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }else {
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp;
        }
        return this;
    }

    insertToEnd(val){
        let newNode = new Node(val);
        if(!this.head){
            this.insertToStart(val);
        }else {
            let temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        return this;
    }

    deleteStart() {
        console.log("deleted node: " + this.head.val);
        this.head = this.head.next;
        return this.head;
    }

    deleteEnd(){
        let temp = this.head;
        let temp2 = temp;
        while(temp.next){
            temp2 = temp;
            temp = temp.next;
        }
        console.log("deleted node: " + temp.val);
        
        temp2.next = null;
        return this.head;
    }
}

const list = new LinkedList();
console.log(list.insertToEnd(5));
console.log(list.insertToEnd(6));
console.log(list.insertToEnd(7));
console.log(list.deleteStart());
console.log(list.deleteEnd());
