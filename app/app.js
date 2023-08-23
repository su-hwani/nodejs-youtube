"use strict";

//  모듈
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")

// 라우팅
const home = require("./src/routes/home")


// 앱 세팅
app.set('views', path.join(__dirname, './src/views'));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(bodyParser.json())
// URL 을 통해 전달되는 데이터에 한글, 공백 등을 처리하지 못하는 문제를 해결
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/",home) // use -> Middleware 를 등록해주는 메서드

module.exports = app