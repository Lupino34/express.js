//              -----Создание сервера и подключение библиотеки express.js
// Чтобы подключить библиотеку express.js - нужно в консоле набрать: npm i express.
// const express = require('express') //- чтение из библиотеки express.js

// const app = express() //создаем константу app и обращаемся к предыдущей константе express и вызываем ее в формате функции ()

// // app.get('/', (req, res) => {
// //     res.send('vlad privet')
// // }) // функция get() - позваляет отслеживать любые url адреса. Вданном примере мы отслеживаем главную страницу '/' и указываем анонимную функцию которая принимает 2 параметра (res, req)  и внутрифункции обращаемся к параметру send   и выводим текст =>{res.send('vlad privet)}
// // //  -----Отслеживание url адреса
// // app.get('/about', (req, res) => {
// //     res.send('Про нас')
// // });

// // app.get('/user/:username/:id', (req, res) => {
// //     res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
// // });
// //              -----Создаем сервер-----
// const PORT = 3000
// //Обращаемя к приложению app далее обращаемся к функции listen (здесь указываем порт, указываем colback функцию что сработает после запуска сервера )
// app.listen(PORT, () =>{
//     console.log(`Server started: http://localhost:${PORT}`)
// })


//                      -----Использование шаблонизатора-----
// Создаем index.html и делаем как вверху
// const express = require('express')
// const app = express()

// app.set('view engine', 'ejs') // метод set - можно настраивать разные настройки к приложению с помощью различных шаблонизаторов в данном случае ejs. view engine - движок для отображения шаблонов, ejs - значение шаблонизатора

// app.get('/', (req, res) => {
//     // res.sendFile(__dirname +'/index.html') // __dirname - константа и при обращение к ней получаем полный путь к папке
//     // //(из текущей папки выбираем index.html)
//     res.render('index')             // отображение файлов через шаблонизатор используют другой метод render. После этого не нужно передовать полный путь к текущей папке - просто название 'index'
// })

// app.get('/about', (req, res) => {
//     res.send('Про нас')
// });

// app.get('/user/:username/:id', (req, res) => {
//     res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
// });

// const PORT = 3000
// app.listen(PORT, () =>{
//     console.log(`Server started: http://localhost:${PORT}`)
// })

// Подключение шаблонизатора: EJS - npm i ejs;
//     ====> после запуска сервера - выдается ошибка - указывающая на wiew;
// нужно создать папку views и поместить index.html - после этого будет все рано ошибка т.к надо изменить расширение index.html на index.ejs

//                      =====>Переписываю вверхнии значения <====
const express = require('express')

const app = express()

app.set('view engine', 'ejs') // подключение движка и расширения
app.use(express.static('public')) // use - статическое по, - подключение стилей style.css в папке public
app.get('/', (req, res) => {
    res.render('index') // отображение файлов через шаблонизатор
})

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/user/:username/', (req, res) => {
    let data = {username: req.params.username, hobbies: ['Footboll', 'Scate', 'Bascetboll']}
    res.render('user', data) //чтобы передать информацию в некий определеный шаблон нужно указать 2 параметра. Ив качестве параметра указываем некий обьект {}, наш обьект будет состоять из одгого свойства username  а в качестве значения мы обращаемся к req.params.username - (т.е мы обhащаемся к username  а в качестве этого свойства мы передаем то что получиле из url адреса ). -----устанавливаем свойство hobbies[внутри масива описываем ] 
});

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server started: http://localhost:${PORT}`)
})

// Заходим в папку views - создаем about.ejs, user.ejs


// ---------Добавление стилей----------