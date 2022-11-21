function pin(){
    var n = parseInt(document.getElementById("n").value);
    s=0
    for (i=0;i<=n;i++){
        s=s+(Math.pow(-1,i)/(Math.pow((2*i+1),3)))

    }
    
    var pi = Math.pow(Math.PI,3)/32;
    var s1= s.toFixed(3)
    var pi1 =pi.toFixed(3)
    document.getElementById("respi").innerHTML=+s1+" es igual a "+pi1+""
}