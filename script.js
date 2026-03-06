//your JS code here. If required.
document.getElementById('btn').addEventListener("click",function(){
let number=document.getElementById('ip').value;
let output=document.getElementById('output');

new Promise((resolve)=>{
  setTimeout(()=>{
   output.innerText= `Result: ${number}`;
   resolve(number); 
  },2000);
}).then((data)=>{
   return new Promise((resolve)=>{
    setTimeout(()=>{
      let multiple=data*2;
      output.innerText= `Result: ${multiple}`;
      resolve(multiple);
    },2000);
   }).then((data)=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        let subtract= data-3;
        output.innerText= `Result: ${subtract}`;
        resolve(subtract);
      },1000);
    }).then((data)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          let divide = data/2;
          output.innerText = `Result: ${divide}`;
          resolve(divide);
        },1000);
      }).then((data)=>{
        return new Promise((resolve)=>{
          setTimeout(()=>{
           let add = data + 10;
           output.innerText=`Finale Result: ${add}`;
          },1000)
        })
      })
    })
   })
})
})