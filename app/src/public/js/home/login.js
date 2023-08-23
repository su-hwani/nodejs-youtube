"use strict"

// <DOM>
// document.querySelector 는 id 나 tag 등에서 데이터를 가져오는건데, 
// 여기서 id 와 tag 가 같을 수도 있으니까 id 값으로 데이터를 가져올 때는
// "#" 을 붙여준다. 
// ex) button -> 버튼 태그, #button -> id="button" 인 태그 
const id = document.querySelector("#id")
const pw = document.querySelector("#pw")

const loginBtn = document.querySelector("button")
loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        pw: pw.value
    }
    console.log(req)
})
