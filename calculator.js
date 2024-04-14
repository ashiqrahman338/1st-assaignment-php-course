function handleSubmit() {
    const selectedOperation = document.getElementById("operation").value;
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");
    let res = 0;
    switch (selectedOperation) {
        case "add":
            res = num1 + num2;
            result.innerHTML = `Result: ${res}`;
            break;
        case "sub":
            res = num1 - num2;
            result.innerHTML = `Result: ${res}`;
            break;
        case "mul":
            res = num1 * num2;
            result.innerHTML = `Result: ${res}`;
            break;
        case "div":
            res = num1 / num2;
            result.innerHTML = `Result: ${res}`;
            break;
    
        default:
            result.innerHTML = "Invalid";
            break;
    }
    result.style.display = 'block';
}