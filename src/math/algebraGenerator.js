const sign = (p,q,x) => {
    const optionsCount = 1;


    if(p*q === 0)
        return 1;
    
    const pOdd = (p & 1) ? true : false;
    const qOdd = (q & 1) ? true : false;

    if((x & 1) && p===1 && qOdd)
        return -1;

    if(!pOdd && !qOdd){
        if((x>>optionsCount && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>optionsCount && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>optionsCount && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>optionsCount && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(!pOdd && qOdd){
        if((x>>(optionsCount + 2) && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>(optionsCount + 2) && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(pOdd && !qOdd){
        if((x>>(optionsCount + 2) && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>(optionsCount + 2) && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 3)
          return -1 * sign(q>>1,p>>1,x);
    }
    if(pOdd && qOdd){
        if((x>>(optionsCount + 2) && 3) === 0)
          return sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 1)
          return sign(q>>1,p>>1,x);
        if((x>>(optionsCount + 2) && 3) === 2)
          return -1 * sign(p>>1,q>>1,x);
        if((x>>(optionsCount + 2) && 3) === 3)
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

const multiply = (a, b, x) => {
    let r = {};

    for(var i in a)
        {
            for(var j in b)
            {
                let n = nion(i, j, x);
                let sign = n < 0 ? -1 : 1;
                let ion = Math.abs(n) - 1;
                r[ion] = sign * a[i] * b[j]
            }
        }

    return r;
}