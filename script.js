
function calculator()
{
    var amount =prompt("Nhập số tiền gửi vào ngân hàng");
    var rate=prompt("Nhập % lãi suất hàng tháng");
    var month=prompt("Nhập số tháng");
    var interest=(amount*(0.01*rate));
    total=Number(amount);
    for(var i=0;i<month;i++)
    {
        total+=interest;
    }
    alert("Tổng số tiền phải trả là:"+total.toFixed(2));
}