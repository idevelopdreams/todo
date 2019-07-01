const taskItems = document.getElementsByTagName('li')

for (let i = 0; i < taskItems.length; i++) {
    const element = taskItems[i];
    element.addEventListener('click', function(){
        fetch('/tasks/' + element.id, {method: 'delete'})
        .then(function(response){
            // console.log(response);
            return response.json()
        })
        .then(function(data){
            window.location.reload();
        }) 
    })          
    
}

