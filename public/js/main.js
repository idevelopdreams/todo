const taskItems = document.getElementsByTagName('li');

for (let i = 0; i < taskItems.length; i++) {
    const element = taskItems[i];

    element.addEventListener('click', function(){
        console.log(element.id);
<<<<<<< HEAD
        fetch('/tasks/' + element.id, {method: "delete"} )
        .then((res) => res.json() )
        .then((data) => location.reload() )
=======
        fetch('/tasks/' + element.id, { method: "delete" } )
        .then( (res) => res.json() )
        .then( (data) =>  location.reload() )
>>>>>>> d1b48b70c7f467d1efb721cd57938d10fd19b189
    }) 
}






