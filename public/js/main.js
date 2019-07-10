const taskItems = document.getElementsByTagName('li');

for (let i = 0; i < taskItems.length; i++) {
    const element = taskItems[i];

    element.addEventListener('click', function(){
<<<<<<< HEAD
        console.log(element.id)
=======
        console.log(element.id);
>>>>>>> acb59165ed6ede8837f2ca44f21ba2ae1042e7f9
        fetch('/tasks/' + element.id, { method: "delete" } )
        .then( (res) => res.json() )
        .then( (data) =>  location.reload() )
    }) 
}






