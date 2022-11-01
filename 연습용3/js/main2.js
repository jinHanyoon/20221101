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