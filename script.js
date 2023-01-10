
function hexToTen(hex)
{   
        let total=0;
        for(let i=0;i<hex.length;i++)
        {
            let index;
            if(hex[i]>=48&&hex[i]<=57)
            {
                index=Number(hex[i]);
                total=total*16+index;
                console.log(total);
            }else
            {
                switch(hex[i])
                {
                    case 'A':
                        index=10;
                        break;
                    case 'B':
                        index=11;
                        break;
                    case 'C':
                        index=12;
                        break;
                    case 'D':
                        index=13;
                        break;
                    case 'E':
                        index=14;
                        break;
                    case 'F':
                        index=15;
                        break;
                }
                total=total*16+index;
                console.log(total);
            }
        }
        return total;
}
function toBinary(decimal)
{
    var pdu;
    var arr=[];
    var result=0;
    var i=0;
    while(decimal>0)
    {
        pdu=decimal%2;
        decimal=parseInt(decimal/2);
        arr[i]=pdu;  
        i++;
    }
    for(var j=i-1;j>=0;j--)
    {
        result=result*10+arr[j];
    }
    console.log(`Kết quả thu được là:${result}`);
}
let ten=hexToTen("FE");
console.log(ten);
toBinary(ten);