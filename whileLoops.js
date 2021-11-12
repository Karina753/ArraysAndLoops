/* Write while loops to do the following:
Repeatedly print the value of the variable xValue, decreasing it by 0.5 each
time
 as long as xValue remains positive*/
var a = 2;
while(a>=0){
a-=.5
document.write(a,"<br>");
}

/*Print all the odd numbers between 1 - 100.*/
for(x=0;x<=100;x++){
if(x%2!=0){
document.write(x,"<br>");
}
}
/*Write a method with a while loop to print 1 through n in square brackets.
For example, if n = 6 print [1] [2] [3] [4] [5] [6]*/
var n = 10;
var m = 1;
while(m<=n){
document.write(`[${m}]`);
m = m+1;
}
/* Write a method with a while loop that computes the sum of first n positive
integers: sum = 1 + 2 + 3 + ... + n
 Examples:
 n = 5 sum = 15
 n = 19 sum = 190*/
var n = 5;
var sum = 0;
var x = 0;
while(x<=n){