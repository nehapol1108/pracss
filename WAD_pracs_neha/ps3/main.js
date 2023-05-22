const add_user = document.getElementById('add_user')
const close_btn = document.getElementById('close_btn')
const modal = document.getElementById('modal_container')
const submit_btn = document.getElementById('submit_btn')

add_user.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.style.display = 'block';
})
close_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.style.display = 'none';
})

submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const postObj = {
        name,email,age
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:3000")
    xhr.send(postObj);
    xhr.onload=()=>{
        let storedObj =  JSON.parse(localStorage.getItem('users'));
        storedObj.unshift(postObj);
         localStorage.setItem('users',JSON.stringify(storedObj));
        displayData();
    }
    modal.style.display='none'
})
const fetchData =  ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',"http://localhost:3000")
    xhr.send();
    xhr.onload=()=>{
        let data = JSON.parse(xhr.responseText);
         localStorage.setItem('users',JSON.stringify(data));
        displayData();
    }
}
const displayData = ()=>{
    const storedData = JSON.parse(localStorage.getItem('users'));
    let tbody = document.getElementById('tbody');
    tbody.innerHTML='';

    storedData.map((user,index)=>{
        tbody.innerHTML += `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        </tr>
        `
    })
}
fetchData();