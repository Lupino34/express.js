//              -----Создание сервера и подключение библиотеки express.js
// Чтобы подключить библиотеку express.js - нужно в консоле набрать: npm i express.
const express = require('express') //- чтение из библиотеки express.js

const app = express() //создаем константу app и обращаемся к предыдущей константе express и вызываем ее в формате функции ()

app.get('/', (req, res) => {
    res.send('vlad privet')
}) // функция get() - позваляет отслеживать любые url адреса. Вданном примере мы отслеживаем главную страницу '/' и указываем анонимную функцию которая принимает 2 параметра (res, req)  и внутрифункции обращаемся к параметру send   и выводим текст =>{res.send('vlad privet)}
//  -----Отслеживание url адреса
app.get('/about', (req, res) => {
    res.send('Про нас')
});

app.get('/user/:username/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
});
//              -----Создаем сервер-----
const PORT = 3000
//Обращаемя к приложению app далее обращаемся к функции listen (здесь указываем порт, указываем colback функцию что сработает после запуска сервера )
app.listen(PORT, () =>{
    console.log(`Server started: http://localhost:${PORT}`)
})


//                      -----Использование шаблонизатора-----
