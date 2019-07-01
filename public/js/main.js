const taskItems = document.getElementsByTagName('li');

for (let i = 0; i < taskItems.length; i++) {
        const element = taskItems[i];
        taskItems[0].addEventListener('click', function(){
        fetch('/tasks/' + element.id, {method: "delete"} )
        .then(function(res){
            console.log(res);
            return res.json()
        })
        .then(function(data){
            location.reload();
        })
    })
}




    
