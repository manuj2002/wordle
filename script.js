const wordle=document.querySelector('#wordle-board');
let i=0,j=0;
let s="";
let compare="sharp";
let m=wordle.children.length;
let b=wordle.children[0];
let n=b.children.length;
const btnd=document.querySelector('#buttond');
const bt=document.getElementsByClassName("bt");


function comparision(s,compare,row)
{ 
    for(let i=0;i<compare.length;i++)
    {
        if(compare.includes(s[i]))
        {
              if(s[i]==compare[i])
              {
                  let x='#'+s[i];
                  const btn=document.querySelector(x);
                  btn.classList.remove('yellow');
                  btn.classList.add('green');
                row.children[i].classList.add('green-animation');
                row.children[i].classList.add('green');
                
              }
              else{
                let x='#'+s[i];
                const btn=document.querySelector(x);
                btn.classList.remove('green');
                btn.classList.add('yellow');
                row.children[i].classList.add('yellow-animation');
                row.children[i].classList.add('yellow');
              }
        }
        else{
            row.children[i].classList.add('gray-animation');
            row.children[i].classList.add('gray');
        }
    }
     
}
document.onkeypress=function(ev)
{
    let c=ev.key;
    
  if(j!=n)
    {
        if(c!='Backspace')
        {const row=wordle.children[i];
    const box=row.children[j];
  
    const h=box.querySelector('h1');
    h.innerHTML=c;
       s=s+c;
    
    j++;}
    else{
        const row=wordle.children[i];
    const box=row.children[j-1];
    const h=box.querySelector('h1');
    h.innerHTML="";
    j--;
    s = s.substring(0, s.length - 1);
    }
}
else if(c=="Enter"){
    console.log(s);
    comparision(s,compare,wordle.children[i]);
    j=0;
    i++;
    s="";

}

    


    
    

    
  
}




for(let l=0;l<bt.length;l++)
{
   console.log(bt[l]);
    bt[l].addEventListener('click',function(ev)
    {
        const keynow=ev.srcElement;
        let c=keynow.textContent
        console.log(keynow);
        if(j!=n)
    {
        if(keynow.textContent!='Backspace')
        {const row=wordle.children[i];
    const box=row.children[j];

  
    const h=box.querySelector('h1');
    h.innerHTML=keynow.textContent;
       s=s+c;
    
    j++;}
    else{
        const row=wordle.children[i];
    const box=row.children[j-1];
    const h=box.querySelector('h1');
    h.innerHTML="";
    j--;
    s = s.substring(0, s.length - 1);
    }
}
else if(keynow.textContent=="Enter"){
    console.log(s);
    comparision(s,compare,wordle.children[i]);
    j=0;
    i++;
    s="";

}

    }
    )
}


