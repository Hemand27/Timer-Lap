var hrs=document.getElementById('hrs');
var min=document.getElementById('min');
var sec=document.getElementById('sec');
var tbody = document.getElementById("tbody")
var num = 0



function start(){
    if(sec.textContent<9){
        sec.textContent='0'+ (++sec.textContent)
        
    }
    else if(sec.textContent<61){
        sec.textContent++
    }
    
    
    if(sec.textContent==60){
        sec.textContent="00"
        if(min.textContent<9){
            min.textContent='0'+(++min.textContent)
        }
        else{
            min.textContent++
        }
    }
    else if(min.textContent==59){
        min.textContent="00"
        if(hrs.textContent<9){
            hrs.textContent='0'+(++hrs.textContent)
        }
        else{
            hrs.textContent++
       }
    }

}
function reset() {
    min.textContent="00"
    sec.textContent="00"
    hrs.textContent="00"
    clearInterval(myVar)
   
}
function stop(){
    clearInterval(myVar)
    
}
function lap(){
var row=document.createElement('tr')
    var data1=document.createElement('td')
    var data2=document.createElement('td')
    data1.textContent=++num
    data2.textContent=hrs.textContent +':'+ min.textContent +':'+ sec.textContent
    tbody.appendChild(row)
    row.appendChild(data1)
    row.appendChild(data2)
}


