const taskItems = document.getElementsByTagName('li')

for (let i=0; i < taskItems.length; i++){
    taskItems[i].addEventListener('click', function(){
        debugger
        fetch('/tasks/' + taskItems[i].id, {method: "delete"})
        .then((res) => res.json())
        .then((data) => location.reload());
    });
};


