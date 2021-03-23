var wimpy=["father.jpg","Diary-of-a-Wimpy-Kid.jpg","rodrik.jfif","greg.jpg","manny.jpg"];
var names=["wimpy kid's father-Frank","wimpy kid's mother-Susan","wimpy kid's older brother-Rodrik","wimpy kid-Greg","wimpy kid's smaller brother-Manny"];
var i=0;
function family(){
document.getElementById("family").src=wimpy[i];
document.getElementById("members").innerHTML=names[i];
i++;
if(i==5){
i=0;

}
}
