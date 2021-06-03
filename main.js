Studentarray=[];
function submit(){
    var name1=document.getElementById("Student_Name_1").value;
    var name2=document.getElementById("Student_Name_2").value;
    var name3=document.getElementById("Student_Name_3").value;
    var name4=document.getElementById("Student_Name_4").value;
Studentarray.push(name1);
Studentarray.push(name2);
Studentarray.push(name3);
Studentarray.push(name4);

document.getElementById("display_names").innerHTML=Studentarray;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function Sorting(){
    Studentarray.Sort();
    document.getElementById("display_names").innerHTML;
}