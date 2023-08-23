"use strict";

//  모듈
const express = require('express')
const app = express()
const path = require('path')

// 라우팅
const home = require("./src/routes/home")


// 앱 세팅
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")


app.use("/",home) // use -> Middleware 를 등록해주는 메서드

module.exports = app