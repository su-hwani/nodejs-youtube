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
    console.log(JSON.stringify(req))
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/"
        }else {
            alert(res.msg)
        }
    }).catch((err) => {
        console.err(new Error("로그인 중 에러 발생"))
    })
})
