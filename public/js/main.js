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
