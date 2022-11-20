
fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data)
    return data.json();
}).then((completedData)=>{
    // console.log(completedData[2].title);
   let data1="";
   completedData.map((values)=>{
     data1+=`        <div class="card">
     <h1 class="title">${values.title}</h1>
     <img src=${values.image} class="images">
     <p>${values.description}</p>
     <p class="catageory">Category: ${values.category}</p>
     <p class="price">price:${values.price}</p>
 </div>`
   });
   document.getElementById("cards").innerHTML=data1
}).catch=(err)=>{
    console.log(err)
}