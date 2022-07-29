let a= prompt("donner la valeur de a");
let b= prompt("donner la valeur de b");
let c= prompt("donner la valeur de c");
if (a>b && b<c) {
    console.log("a est max")
}
else {
    if(b > c && c < a){
        console.log(" b est max");
    }
    else {
        if(c > a && a < b) {
            console.log("c est max");
        }
    }
}


let  a=0;
while(a<50)
{
    console.log("Hello hogi", +a++);
}

let a= prompt("donner la valeur de a");
let b= prompt("donner la valeur de b");
let c= prompt("donner la valeur de c");

let delta= b*b-4*(a*c);
console.log("delta est:" +delta);
if (delta>0)
{
    y=Math.sqrt(delta);
    let x1=(-b+y)/2;
    let x2=(-b-y)/2
    console.log("x1 est:" +x1);
    console.log("x2 est:" +x2);
}
else{
    if(delta=0)
    {
        let v= -b/2;
        console.log("x1 est x2 est:" +v);

    }
    else{
        console.log("pas de réponse car delta ne peut pas être négatif");
    }
}