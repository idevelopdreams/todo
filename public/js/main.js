const taskTime = document.getElementsByTagName('li');

for (let i=0; i < taskTime.length; i++) {
    
    taskTime[i].addEventListener('click', function(){
        fetch('/tasks/'+ taskTime[i].id, {method: "delete"} )
        .then(function(res) {
            console.log(res);
            return res.json()
        })
        .then(function(data){
            window.location.reload();
        })
    })
}