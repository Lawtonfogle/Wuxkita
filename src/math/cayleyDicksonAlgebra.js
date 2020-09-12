const twist = (p,q) => {
    if(p*q === 0)
        return 1;

    const pOdd = (p & 1);
    const qOdd = (q & 1);

    if(!pOdd && !qOdd)
        return twist(p>>1,q>>1);

    if(pOdd && !qOdd)
        return twist(q>>1,p>>1);

    if(!pOdd && qOdd)
        return p>>1 === 0 ? 1 : -1 * twist(p>>1,q>>1);

    if(pOdd && qOdd)
        return p>>1 === 0 ? -1 : twist(q>>1,p>>1);
}


const nion = (p,q) => {
    if(p === 0)
        return q + 1;
    if(q === 0)
        return p + 1;
    if(p === q)
        return -1;

    if(p > q)
        return -1 * nion(q, p);

    return twist(p, q) * ((p ^ q) + 1);
}

//Represents a 
const multiply = (a, b) => {
    let r = {};

    for(var i in a)
        {
            for(var j in b)
            {
                let n = nion(parseInt(i), parseInt(j));
                let sign = n < 0 ? -1 : 1;
                let ion = Math.abs(n) - 1;
                if(r[ion])
                  r[ion] += sign * a[i] * b[j]
                else 
                  r[ion] = sign * a[i] * b[j]
            }
        }

    return r;
}