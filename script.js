
function maxArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let max=arr[0];
        if(arr[i]>max)
        {
            arr[0]=arr[i];
            arr[i]=max;
        }
    }
    return arr[0];
}
function minArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let min=arr[0];
        if(arr[i]<min)
        {
            arr[0]=arr[i];
            arr[i]=min;
        }
    }
    return arr[0];
}

function checkArray(arr1,arr2)
{
    let max1,min1,max2,min2;
    min1=minArray(arr1),min2=minArray(arr2);
    max1=maxArray(arr1),max2=maxArray(arr2);
    console.log("Min mảng 1 là:"+min1);
    console.log("Min mảng 2 là:"+min2);
    console.log("Max mảng 1 là:"+max1);
    console.log("Max mảng 2 là:"+max2);
    if(min1>min2&&max1<max2)
    {
        return true;
    }
    return false;
}
let result=checkArray([1,2,3],[2,3]);
if(result)
{
    console.log("Vậy mảng 1 nằm trong mảng 2");
}else
{
    console.log("Vậy mảng 1 không nằm trong mảng 2");
}