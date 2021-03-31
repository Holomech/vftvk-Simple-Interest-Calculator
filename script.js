function compute()
{
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseInt(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    let end_year = new Date().getFullYear() + years;
    let end_sum = interest + principal;
    let result_text = "If you deposit <mark>"+principal +"</mark>,"+"<br>at an interest rate of <mark>"+rate+
        "%</mark>.<br>You will receive an amount of <mark>"+end_sum+
        "</mark>,<br>in the year <mark>"+end_year+"</mark>.";

    document.getElementById("result").innerHTML = result_text;
}

function displayValue()
{
    let range_value = document.getElementById("rate").value;
    document.getElementById("current_rate").textContent = range_value + "%";
}