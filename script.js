function toBinary(decimal)
{
    var pdu;
    var arr=[];
    var total=0;
    var i=0;
    while(decimal>0)
    {
        pdu=decimal%2;
        console.log(pdu);
        decimal=parseInt(decimal/2);
        arr[i]=pdu;  
        i++;
    }
    for(var j=i-1;j>=0;j--)
    {
        total=total*10+arr[j];
    }
    console.log(`Kết quả thu được là:${total}`);
}
toBinary(20);
toBinary(455);
toBinary(50);
