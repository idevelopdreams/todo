const taskItems = document.getElementsByTagName('li');
<<<<<<< HEAD
 
for (let i=0; i < taskItems.length; i++){
    taskItems[i].addEventListener('click',function(){
        fetch('/tasks/' + taskItems[i].id, {method: "delete"} )
        .then(function (res ){
            // console.log(res);
            return res.json()
        })
        .then(function(data){
            window.location.reload();
        })
    })
}

=======

for (let i = 0; i < taskItems.length; i++) {
    const element = taskItems[i];
    element.addEventListener('click', function(){
        fetch('/tasks/' + element.id, {method: "delete"} )
        .then(function(res){
            // console.log(res.json());
            return res.json()
        })
        .then(function(data){
            location.reload();
        })
    }) 
}






>>>>>>> dff91661a793fe346dbfa545aad9dbcd9b936b44
