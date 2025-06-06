function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  if(years < 0){
    alert("Enter a valid date!!!")
  }else{
      document.getElementById("years").textContent = years.toString().padStart(2, '0');
      document.getElementById("months").textContent = months.toString().padStart(2, '0');
      document.getElementById("days").textContent = days.toString().padStart(2, '0');
  }
}
