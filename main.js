Foods=[]; 
function Submit(){
Fo1=document.getElementById("Food1").value;
Foods.push(Fo1);
console.log(Foods);
document.getElementById("Display_Name").innerHTML=Foods.toString();
}
function Show(){
   var i=Foods.join("<br>");
   document.getElementById("p1").innerHTML=i.toString();
}
function Searching(){
s=document.getElementById("Search_name").value;
Found=0;
var j;
for(j=0;j<Foods.length;j++){
   if(s==Foods[j]){
      Found=Found+1;
   }
}
document.getElementById("p2").innerHTML="Name found "+Found+"times";

}