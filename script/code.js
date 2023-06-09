/* */
let content={
    Name:"ferrari",
    price:"2 billion"
    
}


let table = document.getElementById('tbl-body');
let details = [
    {
        ID: '1',
        Name: 'Ferrari',
        Price: 'R 2 million',
        Image: 'https://i.postimg.cc/cCSzc2HZ/Ferrari-Purosangue.jpg'
    },
    {
        ID: '2',
        Name: 'Lambo',
        Price: 'R 2 million',
        Image: 'https://i.postimg.cc/5jc2pxzy/075-lamborghini-invencible.jpg'
    }

];
details.forEach(detail => {
    table.innerHTML += `
    <tr>
    <th>${detail.Name}</th>
    <th>${detail.Price}</th>
    <th><img src="${detail.Image}" alt="${detail.ID}"></th>
    <th>
    <button>ADD</button>
    </th>
    <th>
    <button>DELETE</button>
    </th>
    </styltrtr>
    `
});














/*detail.forEach(products => {
    products=table
    table.innerHTML +=`<tr>
        <th>${Name}</th>
        <th>${price}</th>
        <th><img src=""></th>
        <th><button>ADD</button></th>
        <th><button>DELETE</button></th>        
    </tr>`
    
});*/