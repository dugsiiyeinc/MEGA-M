const tasks=[];
let total=0;
document.addEventListener('DOMContentLoaded',()=>{
    const data=JSON.parse(localStorage.getItem('task'));


    if(data){
        data.forEach((dat)=> tasks.push(dat));
        apdate()
       
    }
   
})
let saving=()=>{
    localStorage.setItem('task', JSON.stringify(tasks));
    
}




function addItems(){
    let itemName=document.querySelector('#itemname');
    let item=itemName.value
    let prices=document.querySelector('#Price');
    let price=Number(prices.value)
    let Quantities=document.querySelector('#Quantity');
    let Quantity=Number(Quantities.value);
   
   
       if(item&&price&&Quantity){
        tasks.push({item:item,Quantity:Quantity,price:price,sell:0});
        total+=price*Quantity;
        
        // document.querySelector('#h1').innerHTML=`${total}$`;
       
        apdate();
        saving();
       }else{
        alert('please fill out inputs')
       }
     
       itemName.value='';
       prices.value='';
       Quantities.value='';
};
function delette(index){
   total-=tasks[index].Quantity*tasks[index].price;

    tasks.splice(index, 1);
    
    // saving();
   apdate()
   saving();
  

}
function oneValue(index){
    if(tasks[index].Quantity>=1){
    total-=tasks[index].price;
    tasks[index].Quantity= tasks[index].Quantity-1;
    tasks[index].sell+=1;
    // saving();
    apdate();
    saving();

   
    }else{
        total-=tasks[index].Quantity*tasks[index].price;
        // tasks.splice(index, 1);
        // saving();
        alert('quantity is lesthen 1 !');
        apdate();
        saving();

    };

};
function fiveValue(index){
    if(tasks[index].Quantity>=5){
    total-=tasks[index].price*5;
    tasks[index].Quantity= tasks[index].Quantity-5;
    tasks[index].sell+=5;
    // saving();
    apdate();
    saving();

   
    }else{
        // total-=tasks[index].Quantity*tasks[index].price;
        // tasks.splice(index, 1);
        alert('quantity is lesthen 5 !')
        // saving();
        apdate();
        saving();        

    };

}
function tenValue(index){
    if(tasks[index].Quantity>=10){
    total-=tasks[index].price*10;
    tasks[index].Quantity= tasks[index].Quantity-10;
    tasks[index].sell+=10;
    // saving();
    apdate();
    saving();

   
    }else{
        // total-=tasks[index].Quantity*tasks[index].price;
        // tasks.splice(index, 1);
        alert('quantity is lesthen 10 !');
        // saving();
        apdate();
        saving();

    };

}

function apdate(){
    const taskItems=document.querySelector('#listItems');
     taskItems.innerHTML='';
     total=0;
    tasks.forEach((task,index)=>{
        let total_p= task.Quantity*task.price;
        total+=total_p;
      
        // total_p+=task.Quantity*task.price;
       let lists=document.createElement('li');
       lists.innerHTML=` <span class="no">${index}: </span> <span class="item">${task.item}</span>  <span class="Quantity">${task.Quantity}</span>
                <span class="price">${task.price}</span> <span class="total">${total_p}$</span>  <span class="total">${task.sell}</span><span class="actions"><button onclick="oneValue(${index})">-1</button>
                <button onclick="fiveValue(${index})">-5</button>
                <button onclick=" tenValue(${index})">-10</button>
                <button onclick="delette(${index})" class="delete">delete</button></span>`;

        taskItems.appendChild(lists)
        // oneValue();

    });
    document.querySelector('#h1').innerHTML=`${total}$`;

}


document.querySelector('#submit').addEventListener('click',(e)=>{
    e.preventDefault();
    addItems()
});

// document.querySelector('#h1').innerHTML=`${total}$`;
