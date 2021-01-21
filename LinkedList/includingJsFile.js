// this syntax shows how one can use the LinkedList class in other javascript file by simply defining the class.js file above the includeingFile.js
// syntax :- 
//   <script src="class.js"></script>
//   <script src="includingFile.js"></script>

let head = new LinkedList(1);
head.push_back(2);
head.push_back(0);
head.print_linkedlist();
head = head.sort();
head.print_linkedlist();
