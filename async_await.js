const posts=[
    {title:'post1',body:"This is post1"},
    {title:'post2',body:"This is part2"}
]
function getPost(){
        setTimeout(()=>{
            let output='';
            posts.forEach((post)=>{
                output +=`<li>${post.title}</li>`
            })
            document.body.innerHTML=output
            //console.log(`Remaining posts:${output}`)
        },1000)
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Error:Something wents wrong");
            }
        },2000)
       
    })
}

function updateLastActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let updateTime = new Date()
            //console.log(updateTime);
            resolve(updateTime)
        },1000);
    })
}

function delePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}

async function getButter(){
    const butter = new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log("Husband got butter");
        resolve("Butter");
        },1000);
    })
    console.log(butter)
}

async function getColdDrink(){
    const coldDrink = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Husband got cold drinks");
            resolve("Cold Drinks");
          }, 1000);
    })
    console.log(coldDrink);
}

async function managePost(){
  await createPost({title:'post3'});
  await delePost();
  getPost()
   
}
managePost()
getButter()
getColdDrink()