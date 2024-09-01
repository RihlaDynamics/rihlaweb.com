const fullname=document.getElementById("name");
const number=document.getElementById("number");
const email=document.getElementById("email");
const textbox=document.getElementById("textbox");
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}



const texts = [
    "Seamless Solutions, Superior Results",
    "Transforming Visions into Reality",
    "Innovation Through Technology"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;

const form=document.querySelector('form')

function sendEmail()
{
  const bodymessage=`Full Name: ${fullname.value}<br/>
                     Email:${email.value}<br/>
                     number:${number.value}<br/>
                     textbox:${textbox.value}`;

  
  


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rihladynamicssolutions@gmail.com",
        Password : "A9369255FE7914BB1198581414805C3F0F33",
        To : 'rihladynamicssolutions@gmail.com',
        From :"rihladynamicssolutions@gmail.com",
        Subject : "Information",
        Body : bodymessage
    }).then(
      message =>{
        if(message=="OK"){
            Swal.fire({
                title:"Success!",
                text: "Message Delivered Successfully",
                icon: "success"
              });
        }
      }
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
   sendEmail();
});
const knowbtn=document.getElementById("know-btn");
knowbtn.addEventListener("click",()=>{
   const c=document.getElementById("3");
   console.log(c);
})