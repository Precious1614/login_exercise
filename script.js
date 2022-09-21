function userLogin() {
  let userName = document.querySelector(".username").value;
  let userPassword = document.querySelector(".userpw").value;
  let errormessage = document.querySelector(".errormessage");
  let success = document.querySelector(".rightmessage");

  valid = false;

  let i = 0;
  let users = [
    { Name: "Ope", password: "check" },
    { Name: "Tobi", password: "true" },
    { Name: "Kemi", password: "false123" },
    { Name: "Seun", password: "readme" },
    { Name: "Tunde", password: "gitlab" },
    { Name: "Olayemi", password: "github2" },
    { Name: "Pelumi", password: "vscode" },
    { Name: "Tolu", password: "false" },
    { Name: "Segun", password: "false" },
    { Name: "Adeyemi", password: "false" },
  ];
  //   let userarray = ["User1", "User2", "User3", "User4", "User5"];
  //   let passarray = ["Pass1", "Pass2", "Pass3", "Pass4", "Pass5"];

  //   for (let i = 0; i < userarray.length; i++) {
  //     if (userName == userarray[i] && userPassword == passarray[i]) {
  //       valid = true;
  //       break;
  //     }
  //   }

  for (let i = 0; i < users.length; i++) {
    if (userName == users[i].Name && userPassword == users[i].password) {
      valid = true;
      break;
    }
  }

  if (valid) {
    success.style.display = "block";
    success.style.color = "green";

    // alert(`true`);
  } else {
    errormessage.style.display = "block";
    errormessage.style.color = "red";

    // alert(`false`);
  }

  //   alert(userName.value);
}
