const taskItems = document.getElementsByTagName('li')

for (let i=0, i < taskItems.length, i++){
    taskItems[i].addEventListener('click', function(){
        debugger
        fetch('/tasks/' + taskItems[i].id, {method: "delete"})
        .then(function(res){
            console.log(res);
            return res.json();
        });
        .then(function(data){
            location.reload();
        });
    });
};


