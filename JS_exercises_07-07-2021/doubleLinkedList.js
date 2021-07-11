function doubleLinkedList(){
    function Node(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    let len = 0;
    let head = null;
    let tail = null;


    this.insert = (pos, ele) => {
        if (pos >= 0 && pos <= len){
            let node = new Node(ele),
            curr = head,
            previous,
            index = 0;

            if (pos === 0){
                if (!head){
                    head = node;
                    tail = node;
                }
                else {
                    node.next = curr;
                    curr.prev = node;
                    head = node;
                }
            }
            else if (pos === len){
                curr = tail;
                curr.next = node;
                node.prev = curr;
                tail = node;
            }
            else{
                while (index++ < pos){
                    previous = curr;
                    curr = curr.next;
                }

                node.next = curr;
                previous.next = node;

                curr.prev = node;
                node.prev = previous;
            }
            len++;
            return true;
        }else { return false;}
    }

    this.removeAt = (pos) => {
        if (pos >= 0 && pos < len){
            let curr = head,
            previous,
            index = 0;

            if (pos === 0){
                head = curr.next;

                if (len === 1){
                    tail = null;
                }
                else{
                    head.prev = null;
                }
            }
            else if (pos === len-1){
                curr = tail;
                tail = curr.prev;
                tail.next = null;
            }
            else{
                while (index++ < pos){
                    previous = curr;
                    curr = curr.next;
                }

                previous.next = curr.next;
                curr.next.prev = null;
            }
            len--;
            return curr.element;
        }
        else return null;   
    }

    this.append = (ele) => {
        return this.insert(len,ele);
    }

    this.indexOf = (ele) => {
        let curr = head,
        index = -1;

        while (curr){
            if (ele === curr.element){
                return ++index;
            }
            else{
                index++;
                curr = curr.next;
            }
        }
        return -1;
    }

    this.isPresent = (ele) => {
        return this.indexOf(ele) !== -1;
    }

    this.delete = (ele) => {
        return this.removeAt(this.indexOf(ele));
    }

    this.isEmpty = () => {
        return len == 0;
    }

    this.size = () => {
        return len;
    }

    this.deleteHead = () => {
        return this.removeAt(0);
    }

    this.deleteTail = () => {
        return this.removeAt(len-1);
    }

    this.print = () => {
        let curr = head,
        str = '';

        while (curr){
            str += curr.element + (curr.next ? ", " : "\n");
            curr = curr.next;
        }
        return str;
    }

}

let dll = new doubleLinkedList();

dll.append("Ravi");
dll.append("Ajay");
dll.append("Priya");
dll.insert(1,"Vijay");
console.log(dll.print());

dll.delete("Vijay");
dll.insert(0,"Vinay");
console.log(dll.print());

dll.deleteHead();
console.log(dll.print());

dll.deleteTail();
console.log(dll.print());

console.log("is Ajay Present:",dll.isPresent("Ajay"));