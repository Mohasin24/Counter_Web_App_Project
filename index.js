
let cnt = 0;
let element = document.getElementById("count");

function increment() 
{
    cnt++;
    element.textContent=cnt;
}

function decrement() 
{
    
    if(cnt>0)
    {
        cnt--;
        element.textContent=cnt;
    }       
}
let s = "Previous Entries : ";
let countStr = document.getElementById("entries");
function save()
{
    s = s+cnt + " -> ";
    countStr.textContent=s; 
    // set cnt back to 0
    cnt=0
    element.textContent=cnt;
}



