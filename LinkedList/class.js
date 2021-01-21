class LinkedList{
    constructor(val){
        this.val = val;
        this.next = null;
    }

    push_front(val){
        
        let new_node = new LinkedList(val);
        new_node.next = this;
        return new_node
    }
    push_back(val){

        let t = this;
        while(t.next){
            t=t.next;
        }
        t.next = new LinkedList(val);
    }
    pop_front(){
        if(this==null){
            console.log(" empty Linked List ");
            return null;
        }
        return this.next;
    }
    pop_back(){
        let t = this;
        let prev = null;
        if(t == null ){
            console.log(" empty Linked List");
            return null;
        }
        if(t.next == null){
            return null;
        }
        while(t.next){
            prev = t;
            t = t.next;
        }
        prev.next = null;
        return this;
    }
    // finding the mid of the linked list
    mid(){
        let slow = this;
        let fast = this.next;
        if(fast == null)return slow;
        fast = fast.next;
        if(fast==null)return slow;

        while(fast && fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.next;

    }
    merge(head2){
        let head1 = this;
        let head = null;
        let t = null;

        while(head1 && head2){
            if(head1.val < head2.val){
                if(t == null ){
                    t = new LinkedList(head1.val);
                    head = t;
                }
                else{
                    t.next = new LinkedList(head1.val);
                    t = t.next;
                }
                head1 = head1.next;
            }
            else{
                if(t == null ){
                    t = new LinkedList(head2.val);
                    head = t;
                }
                else{
                    t.next = new LinkedList(head2.val);
                    t = t.next;
                }
                head2 = head2.next;
            }
        }
        if(head1)t.next = head1;
        if(head2)t.next = head2;
        return head;
    }
    merge_sort(head){
        if(head.next==null)return head;
        else{
            let mid_node = head.mid();
            let left = head;
            let right = mid_node.next;
            mid_node.next = null;

            let head1 = this.merge_sort(left);
            let head2 = this.merge_sort(right);

            head1 = head1.merge(head2);
            return head1;
        }
    }
    sort(){
       return this.merge_sort(this);
    }

    // search element in the linked list
    // search returns the node if the value is present else it returns null
    search(value){
        let t = this;
        while(t){
            if(t.val==value)return t;
            t=t.next;
        }
        return null;
    }
    length(){
        let t=this;
        let len = 0;
        while(t){
            len++;
            t=t.next;
        }
        return len;
    }
    print_linkedlist(){
        let t = this;
        while(t){
            console.log(t.val);
            t = t.next;
        }
    }

}
