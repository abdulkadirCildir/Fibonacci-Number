document.getElementById("number")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn").click();
        }
    });

document.getElementById("btn").addEventListener(
    "click", fibonacci);

function fibonacci() {
    const n = document.getElementById("number").value;
    var fibo = [1, 1];
    for (i = 0; i < n-2; i++) {
        fibo.push(fibo[i] + fibo[i+1]);
    }
    if (isNaN(n) || n < 1) {
        document.getElementById("result").innerHTML = "Please check your input!";
    } else {
        document.getElementById("result").innerHTML = n + ". element of Fibonacci Sequence is " + fibo[n-1];
    }
}



// document.getElementById("btn").addEventListener("click", fibonacci);

// function fibonacci() {
//     let num = document.getElementById("number").value;
//     var fib = [0, 1];
//     var a = fib[0];
//     var b = fib[1];
//     var z;
    
//     for (i = 2; i < num; i++) {
//         z = a+b;
//         a = b;
//         b = z;
//         fib.push(z);
//     }
//     if (num==0){
//         document.getElementById("result").innerHTML = "PLS try again";
//     }
//     else {
//         document.getElementById("result").innerHTML= num + ". fibonacci degeri " + fib[num-1];
//     }
// }


