// Add your code here
function submitData(name, email){
    let formData = {
        name,
        email
    }
   return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            accept:"application/json"
        },
        body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(jsonData =>{
        document.body.innerHTML = jsonData.id
    })
    .catch(message => document.body.innerHTML = message)
}