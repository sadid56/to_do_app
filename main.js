document.getElementById('add-task').addEventListener('click', function(){
    const input = document.getElementById('input');
    const inputtext = input.value;
    const taskContainer = document.getElementById('task');
    const h4 = document.createElement('h4');
    h4.innerText ='* '+ inputtext;
    taskContainer.appendChild(h4)
    input.value = '';
    document.getElementById('delete-btn').addEventListener('click', function(){
    taskContainer.removeChild(h4)
    })
    
})
//! same but eita keyboard er enter e click korlei hobe

document.getElementById('input').addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        const input = document.getElementById('input');
    const inputtext = input.value;
    const taskContainer = document.getElementById('task');
    const h4 = document.createElement('h4');
    h4.innerText =inputtext;
    taskContainer.appendChild(h4)
    input.value = '';
    document.getElementById('delete-btn').addEventListener('click', function(){
        taskContainer.removeChild(h4)
        })
    }
    
})