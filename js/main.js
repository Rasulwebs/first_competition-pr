// I'm started Abduhamid
let LogoutBtn = document.querySelector(".logoutbtn");
LogoutBtn.addEventListener("click", () => {});
let eye = document.querySelector(".bi-eye");
let cloceEye = document.querySelector(".bi-eye-slash");
let closeModal = document.querySelector(".modalClose");
let Modal = document.querySelector(".WindowModal");
let Logout = document.querySelector(".logoutbtn");
let Logout2 = document.querySelector(".logoutbtn2");
let EmailInput = document.querySelector(".emailInput");
let PasswordInput = document.querySelector(".passwordInput");
let InputWrapperEmail = document.querySelector(".input-wrap1");
let InputWrapperPassword = document.querySelector(".input-wrap2");
let fill = document.querySelector(".fill")
// InputWrapperEmail.style.border="1px solid red"

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (PasswordInput.value.length < 6) {
      InputWrapperPassword.style.border = "1px solid red";
      fill.innerHTML = "please! there should be at least 6";
  } else {
    InputWrapperPassword.style.border = "1px solid green";
  }
  if (EmailInput.value.length === 0) {
    InputWrapperEmail.style.border = "1px solid red";
  } else {
    InputWrapperEmail.style.border = "1px solid green";
    }
    if (
      InputWrapperEmail.style.border == "1px solid green" &&
      InputWrapperPassword.style.border == "1px solid green"
    ) {
        setTimeout(() => {
    
            Modal.style.display = "none";
            alert("Ro'yxatdan muvofiyaqatli o'tinngiz")
    },2000)
 
    } 
});

  Logout.addEventListener("click", () => {
    Modal.style.display = "block";
  });
Logout2.addEventListener("click", () => {
  Modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  Modal.style.display = "none";
});
cloceEye.style.display = "none";
eye.addEventListener("click", () => {
  eye.style.display = "none";
  cloceEye.style.display = "block";
  pas.type = "text";
});
cloceEye.addEventListener("click", () => {
  eye.style.display = "block";
  cloceEye.style.display = "none";
  pas.type = "password";
});
