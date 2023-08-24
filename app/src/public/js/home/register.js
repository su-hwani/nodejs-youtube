"use strict"

// <DOM>
// document.querySelector 는 id 나 tag 등에서 데이터를 가져오는건데, 
// 여기서 id 와 tag 가 같을 수도 있으니까 id 값으로 데이터를 가져올 때는
// "#" 을 붙여준다. 
// ex) button -> 버튼 태그, #button -> id="button" 인 태그 
const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const name = document.querySelector("#name")
const confirmPw = document.querySelector("#confirmPw")

const registerBtn = document.querySelector("#button")
registerBtn.addEventListener("click", () => {
    if (!id.value) {
        return alert("아이디를 입력해주세요")
    }
    if (pw.value !== confirmPw.value){
        return alert("비밀번호가 일치하지 않습니다")
    }
    
    const req = {
        id: id.value,
        pw: pw.value,
        name: name.value,
    }
    console.log(req)

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login"
        }else {
            alert(res.msg)
        }
    }).catch((err) => {
        console.err(new Error("회원가입 중 에러 발생"))
    })
})
