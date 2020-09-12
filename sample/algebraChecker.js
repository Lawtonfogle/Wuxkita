//For use at https://playcode.io/

/* html


<div id=table />

*/
/* css

body {
  background: white;
  color: #323232;

  margin: 0;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: Helvetica neue, roboto;

}

td{
  border-left: 1px solid black;
  border-top: 1px solid black;
  padding: 5px;
}

td.negative{
  background-color: lightblue;
}

*/
/* js


const sign = (p,q,x) => {
    
    if(p*q === 0)
        return 1;
    
    const pOdd = (p & 1) ? true : false;
    const qOdd = (q & 1) ? true : false;

    if(p === 1 && qOdd)
      return -1;

    if(!pOdd && !qOdd){
        if((x && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(!pOdd && qOdd){
        if((x>>2 && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>2 && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>2 && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>2 && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(pOdd && !qOdd){
        if((x>>4 && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>4 && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>4 && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>4 && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(pOdd && qOdd){
        if((x>>6 && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>6 && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>6 && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>6 && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }

    console.log({
      p: p,
      q: q,
      x: x,
      pOdd: pOdd,
      qOdd: qOdd,
      error: 'there was an error'})
}


const nion = (p,q,x) => {
    if(p === 0)
        return q + 1;
    if(q === 0)
        return p + 1;
    if(p === q)
        return -1;

    if(p > q)
      return -1 * nion(q, p, x)

    return sign(p, q, x) * ((p ^ q) + 1);
}


let x = 29;


let size = 8;
var content = '<table>';
for(var i = 0; i < size; i++)
{
  content += '<tr>'
  for(var j = 0; j < size; j++)
  {
    let n = nion(i,j, x)
    content += `<td ${n<0 ? 'class="negative"' : ''}>${n<0 ? '-' : ''}e_${Math.abs(n)-1}</td>`
  }
  content += '</tr>'
}
content += '</table>'

$('#table').append(content)

*/