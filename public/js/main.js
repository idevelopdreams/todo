<<<<<<< HEAD
const taskItem = document.getElementsByTagName('li');


for (let i = 0; i < taskItem.length; i++) {
    const element = taskItem[i];
    element.addEventListener('click', function(){
        fetch('/tasks/' + taskItem[0].id, {method: "delete"} )
        .then(function(response){
            // console.log(res.jsoon());
            return response.json()
        })
            console.log(response);
        })
    );
=======
const taskItems = document.getElementsByTagName('li');

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
