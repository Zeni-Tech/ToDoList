let inputs = document.getElementById('inputbyuser');
let task=document.querySelector('#task');

function Add(){
    if(inputs.value == ""){
        alert("Please enter Task");
    }
    else{
        let newElement = document.createElement('ul');
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`
        task.appendChild(newElement);
        inputs.value='';
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove();
        }
    }
}