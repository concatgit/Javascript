
function calculator()
{
    var amount =Number(prompt("Nhập vào khoản vay ngân hàng"));
    var rate=Number(prompt("Nhập % lãi suất hàng tháng"));
    var month=Number(prompt("Nhập thời gian phải trả"));
    // Số tiền phải trả ngân hàng mỗi tháng
    var result=(amount+amount*(rate*0.01))/month;
    alert("Tổng số tiền phải trả là:"+result.toFixed(2));
}