//הוסיפו סקריפט שיבדוק האם המייל תואם ל doctor@gmail.com
  window.onload = () => {
    if (localStorage.getItem("loggedIn") === "true") {
      window.location.href = "logged.html"; // העברה אוטומטית לעמוד logged.html אם כבר מחובר
    }
  };

  const checkIf = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email !== "doctor@gmail.com") {
      alert("Invalid email, please try again.");
      return false;
    } else if (password !== "medic123") {
      alert("Incorrect password, please try again.");
      return false;
    } else {
      // שמירת מצב התחברות ב-localStorage
      localStorage.setItem("loggedIn", "true");
      window.location.href = "logged.html"; // העברה לעמוד logged.html
      return true;
    }
  };

  const button = document.getElementById("button");
  button.addEventListener("click", checkIf);
//בדקו גם שהסיסמה תואמת ל medic123
//אם כן השתמשו ב wep api של הדפדפן והעבירו את המשתמש למסך אחר, כל עמוד שתבנו בשם logged.html
//שימו לב אם המשתמש כבר התחבר, בעמוד זה logged.html יהיה לו כפתור להתנתקות
//נסו לשמור את מצב התחברות המשתמש ככה שאם נכנס לעמוד index.html וכבר התחברנו, שבצורה אוטומטית יעביר אותנו הלאה.
//השתמשו כמובן ב localStorage!
