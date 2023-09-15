
const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST", 
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then((r => {if(r.ok === true)alert('данные успешно отправлены')}))
        .catch((error => alert("Упс, произошла ошибка" + error)))
}

const getData = () => {
    fetch('db.json')
        .then((r => r.json()))
        .then((data => sendData(data)))
}

document.addEventListener('DOMContentLoaded', () => {
    getData()
})