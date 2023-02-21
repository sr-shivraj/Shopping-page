let div=""
let emp=[
    {price:500, id:120, product_name:'Shirt', url:'Image/image-1.jpg'},
    {price:500, id:121, product_name:'Pants', url:'Image/image-2.jpg'},
    {price:200, id:122, product_name:'Tie', url:'Image/image-3.jpg'},
    {price:300, id:123, product_name:'Shoes', url:'Image/image-4.jpg'},
    {price:100, id:124, product_name:'Shocks', url:'Image/image-5.jpg'},
    {price:600, id:125, product_name:'Perfume', url:'Image/image-6.jpg'},
]
emp.forEach(function(obj){

div+=`
<div class='col'>
<div class='card'>
<img src=${obj.url}>
<h3>Product Type: ${obj.product_name}</h3>
<p>Price: Rs.${obj.price}</p>
</div>
</div>`

})
document.getElementById("row").innerHTML=div;
