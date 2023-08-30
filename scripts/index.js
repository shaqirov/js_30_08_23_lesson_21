/* Задание 2: Частичное обновление с помощью PATCH
Цель: Обновить только определенные части данных на сервере с использованием метода PATCH.
Задачи:
Создайте HTML форму с полями для ввода данных (например, только описание товара).
Напишите JavaScript код, который будет отправлять PATCH запрос на сервер с введенными данными при нажатии на кнопку.
Обработайте ответ от сервера и выведите сообщение о частичном обновлении данных.*/
//==================================================================================================================

const form = document.forms.form
function getUserInfo (event) {
    event.preventDefault()

    const {name, username, email} = form
    const userInfo = {
    name: name.value,
    username: username.value,
    email: email.value
    }
    const url = `https://jsonplaceholder.typicode.com/users/1`

    fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }).then(response => {
        if(response.status === 200) {
            alert("Success")
        } else {
            alert(`Error: ${response.status}`)
        }
    })
}
form.addEventListener('submit', getUserInfo)
//==================================================================================================================



/* Задание 3: Удаление данных с помощью DELETE
Цель: Удалить запись на сервере с использованием метода DELETE.
Задачи:
Создайте список элементов (например, список задач или товаров) со списком наименований и кнопками удаления.
Напишите JavaScript код, который будет отправлять DELETE запрос на сервер для удаления выбранной записи при нажатии на кнопку удаления.
Обработайте ответ от сервера и обновите список после успешного удаления.*/
//==================================================================================================================
const btn = document.querySelectorAll('.btn')
btn.forEach(el => {
    el.addEventListener('click', function(event) {
        if (event.target.dataset.btn_id) {
            const URL = `https://jsonplaceholder.typicode.com/users/${event.target.dataset.btn_id}`
            fetch(URL, {
                method: "DELETE",
            })
            .then(response => {
                if (response.ok) {
                    el.parentElement.remove();
                    alert("Success delete")
                }
                else {
                    alert(`Error: ${response.status}`)
                }
            })
        }
    })
})


//==================================================================================================================