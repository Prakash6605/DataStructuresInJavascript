This is the details of how one canuse the functions of LinkedList class

class Name : - LinkedList
Node structure : -     {val , next}

Initializing the LinedList:-
  let head = new LinkedList(val);
  The above statement creates the head of the linked list.


Menthods of the "LinkedList" class :-

1) push_front(val) :- 
   a) Defination : The method inserts the new value at the front of the LinedList and so the head changes .

   b) How to use : The syntax of using the push_front(val) method is as follows "head = head.push_front(val)".

   c) Time Complexity :- O(1).

2) push_back(val) :-
   a) Defination :- The method inserts the new value at the end of the LinedList , but here head does not changes .

   b) How to use : The syntax of using the push_back(val) method is as follows "head.push_back(val)".

   c) Time Complexity :- O(n).

3) mid() :-
   a) Defination :- Retures the mid node of the linkedlist.
    
   b)How to use :- Suppose you have a linkedlist with head as "head1" , then to find the mid of the linkedlist write " let mid_node = head1.mid() ". "mid_node" will be carrying the middle node of the linked list.

   c) Time Complexity :- O(n).

4) merge():-
   a) Defination :- Merges to LinedList , the the linkedlist's are sorted , then the resultant linkedlist is also sorted else the resultant linkedlist is not sorted.

   b) How to use :- suppose you have two linkedlist "head1","head2" , syntax to merge them " let resultant_linkedlist = head1.merge(head2) ".

   c) Time Complexity :- O(n).

5) sort():-
   a) Defination :- sorts the linkedlist in ascending order , using merge sort.

   b) How to use :- synatx " head = head.sort() " ,

   c) Time Complexity :- O(nlogn).

6) search():-
   a) Defination :- searches the node in the linkedlist if the node is found then it returns the node else return null.

   b)How to use :- " let node = head.search(val) " , if(node!=null)found ,else not found .

   c)Time Complexity :- O(n);   

7) print_linkedlist():-
   a) Defination :-displays the linkedlist.

   b)How to use : - To display the elements of the linkedlist whose head is " head1 " , use head1.print_linkedlist().

   c)Time Complexity :- O(n).    
  