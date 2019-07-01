const taskItems = document.getElementsByTagName('li')

taskItems[0].addEventListener('click', function(){
    fetch('/tasks/' + taskItems[0].id, {method: "delete"})
    .then(function(res){
        console.log(res);
        return res.json();
    });
    .then(function(data){
        console.log(data);
    });
});
