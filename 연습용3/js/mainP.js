let login=document.getElementById("login")
let password=document.getElementById("password")
let logButton=document.getElementById("log_go")
let task=[]
let taskP=[]
let logBox =document.getElementById("log")
logButton.addEventListener('click', move)



function move(){
 let passValue=password.value
    taskList={
        userInfo:login.value,
        pass:passValue,}
        task.push(taskList.userInfo)
        taskP.push(passValue)   
        console.log(task)
        console.log(passValue)
    
 if(taskList.userInfo=='윤진한'){
    if(taskList.pass==1234){
      alert('로그인에 성공하셨습니다.')
  alert(taskList.userInfo+'님 반갑습니다.')}
}
    else
    
    {
        alert('로그인에 실패하셨습니다.')
        alert('회원가입 후 이용해주세요.')
    }

    
}