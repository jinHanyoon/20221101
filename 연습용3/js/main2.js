let userNum= document.getElementById("review_va")
let addBtn = document.getElementById("review_btn")
let UserArray =[]
let UserBox= document.getElementById("UserBox")
addBtn.addEventListener('click',test)




function test(){
    let userValue={
      ValueCon:userNum.value,
      id:randomIDGenerator(),
      isComplete:false
            
    }
    UserArray.push(userValue)
    console.log(UserArray)
    render()
}

function render(){
    let resultHTML =''
        for(let i=0; i<UserArray.length; i++){
            resultHTML+=`<div class="UserList">
                        <div class=userList_text>${UserArray[i].ValueCon}

                        <button onclick="deleteList('${UserArray[i].id}')" class=delete>삭제</button>
                        </div>
                        
                        </div>`
        }
    document.getElementById("UserBox").innerHTML=resultHTML;   
}



function deleteList(id){
    for(let i=0; i<UserArray.length; i++){
        if(UserArray[i].id==id){
            UserArray.splice(i,1)
            break;
        }
    }
    render()
}



function randomIDGenerator() {

    return "_" + Math.random().toString(36)}


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