// // let form = document.getElementById('form');
// // let nam = document.getElementById('name')
// // let email = document.getElementById('email')
// // let password = document.getElementById('password')
// // console.log(nam.value);
// // console.log(email.value);
// // console.log(password.value)
// // // c = console.log
// // form.addEventListener('submit', () => {
// //     console.log(get(name));
// //     console.log(email.value);
// //     console.log(password.value)

// // })

// // // const form = document.getElementById('form');
// // // // const formData = new FormData(form);

// // // // form.addEventListener('submit', (e) => {
// // // //   e.preventDefault();
// // // //   fetch('/submit', {
// // // //     method: 'POST',
// // // //     body: formData,
// // // //   })
// // // //     .then((response) => response.json())
// // // //     .then((data) => console.log(data));
// // // // });

// // // form.addEventListener("submit", function(e) {
// // //     e.preventDefault();
// // //     const data = new FormData(form);
// // //     for (const [name,value] of data) {
// // //       console.log(name, ":", value)
// // //     }
// // //   })



// let form = document.getElementById('form');
// let re=document.querySelector("input[value=Register]");
// const fdata=new FormData(form,re)
// console.log(fdata)
// for (let [key,value] in fdata){
//     console.log(`${key}  ${value}`)
// }
// let form = document.getElementById("form");
// let nam = document.getElementById('name')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// console.log(nam.value);
// console.log(email.value);
// console.log(password.value)
// // c = console.log
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(nam.value);
//     console.log(email.value);
//     console.log(password.value)
// })
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});