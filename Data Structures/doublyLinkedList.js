class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
    }

    insertToStart(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        return this;
    }

    insertToEnd(val){
        let newNode = new Node(val);
        if(!this.head){
            this.insertToStart(val);
        }else{
            let temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.previous = temp;
        }

        return this;
    }

    deleteStart(){
        console.log("deleted value is: " + this.head.val);
        this.head.next.previous = null;
        this.head = this.head.next;

        return this;
    }

    deleteEnd(){
        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }
        console.log("deleted value is: " + temp.val);
        temp.previous.next = null;

        return this;
    }
}

const dll = new DLL();
console.log(dll.insertToStart(5));
console.log(dll.insertToStart(6));
console.log(dll.insertToEnd(7));
console.log(dll.insertToEnd(8));
console.log(dll.deleteStart());
console.log(dll.deleteEnd());

