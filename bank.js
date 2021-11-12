/* There are three people waiting for the bank. Their names, in order, are Sofia,
David, and Juan. Create an array that has these three names in order.
 Part 2
 Two more people get added to the back of the line - Sara and Augustin. The first
person in line is called to the teller. What does the queue look like?
 Part 3
It turns out David was saving a spot for his friend Renata. She shows up and
goes behind him in the line. One more person (Elena) shows up and goes to the end
of the line. What does the queue look like?*/

var names = ["Sofía", "David", "Juan"];
console.log(names);
names.push("Sara", "Agustin");
console.log(names);
var x = names.splice(2,3);
console.log(x);
names.push("Renata");
console.log(names);
for(i=0;i<=2;i++){
names.push(x[i]);
console.log(names);
}
names.push("Elena");
console.log(names);

