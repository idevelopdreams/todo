const taskItems = document.getElementsByTagName('li');
for (let i = 0; i < taskItems.length; i++) {
    
    
}
taskItems[0].addEventListener('click', function(){
    fetch('/tasks/' + taskItems[0].id, {method: "delete"})
    .then(function(res){
   // console.log(res.json());
    return res.json()
    })
    .then(function(data){
       location.reload();
    })
})
