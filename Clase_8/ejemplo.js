function laClaveSecreta(clave)
{
    let array = [];        
    for(let i=clave.length-1; i>=0; i--)
    {
        if(clave[i] != "*"){
            array.push(clave[i]);
        }
    }
    return array.join("");
}

console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));

