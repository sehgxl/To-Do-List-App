const add = document.querySelector('#btn1');
const del = document.querySelector('#btn2');
const input = document.querySelector('input');
const main = document.querySelector('.container');
add.addEventListener('click',addItem);
window.addEventListener('keydown',el=>{
  if(el.code==='Enter') addItem();
});
del.addEventListener('click',el=>{
  if(main.querySelector('div')) delItem();
});


function addItem(e){
  if(input.value!=''){
    const div = document.createElement('div');
    div.classList.add('item');
  
    const divText = document.createElement('p');
    div.append(divText);
    divText.innerText = input.value;
  
    const divButtons = document.createElement('div');
    div.append(divButtons);
  
    
  
    const editBtn = document.createElement('button');
    editBtn.innerHTML='<i class="fa fa-solid fa-pen fa-lg"></i>';
    editBtn.addEventListener('click',editCurrentItem);
    divButtons.append(editBtn);
    editBtn.setAttribute('id','editBtn');
    
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click',delCurrentItem);
    delBtn.innerHTML = '<i class="fa fa-solid fa-trash fa-lg">';
    divButtons.append(delBtn);
    delBtn.setAttribute('id','delBtn');

    const tickBtn = document.createElement('button');
    tickBtn.setAttribute('id','tickBtn');
    tickBtn.addEventListener('click',tickCurrentItem);
    tickBtn.innerHTML='<i class="fa fa-solid fa-check fa-lg"></i>';
    divButtons.append(tickBtn);
    tickBtn.classList.add('hide');
    main.append(div);
    input.value='';
  }
}
 
function delItem(){
  const div = main.querySelector('div');
  div.remove();
}

function delCurrentItem(handler){
  const item = handler.target.parentElement.parentElement;
  item.remove();
}

function editCurrentItem(handler){

  const item = handler.target.parentElement.parentElement;
  const text = item.querySelector('p');
  text.setAttribute('contenteditable','True');
  const divButtons = handler.target.parentElement;
  const tickBtn = divButtons.querySelector('#tickBtn')
  tickBtn.classList.remove('hide'); 
  item.classList.add('grey');
}

function tickCurrentItem(handler){
  const item = handler.target.parentElement.parentElement;
  const text = item.querySelector('p');
  text.setAttribute('contenteditable','False');
  const tickBtn = item.querySelector('#tickBtn');
  tickBtn.classList.add('hide');
  item.classList.remove('grey'); 
}
