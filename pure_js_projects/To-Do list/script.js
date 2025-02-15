const InputBox = document.getElementById('InputBox')
const ListContainer = document.getElementById('ListContainer');

const AddText = () => {
    if (InputBox.value =='') {
        alert('Please write something !')
    }
    else { //Creating 'li'  and 'span' element

        let li = document.createElement('li');
        li.textContent = InputBox.value
        ListContainer.appendChild(li);

        let span =document.createElement('span');
        span.innerHTML='\u00d7'//cross icon
        li.appendChild(span);
    }
    InputBox.value=''
    StoreData()
}
// Inserting 'checked class' and removing parentElement
ListContainer.addEventListener('click',function(e){
    if(e.target.tagName =="LI"){ //TagName are always in upperCase
        e.target.classList.toggle("checked");
        StoreData()
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        StoreData()
    }
},false);

// Storing Data in localStorage from ListContainer
function StoreData(){
    localStorage.setItem('Data',ListContainer.innerHTML);
}

//Restoring data from localStorage to 'ListContainer"
function ShowTask(){
    ListContainer.innerHTML=localStorage.getItem('Data');
    }
ShowTask();