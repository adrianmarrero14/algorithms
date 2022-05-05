let name_user = "Adrián";

function fun() {
  let last_name = "Marrero";
  let complete_name = name_user + " " + last_name;
  return complete_name;
}

console.log(name_user); // Return >> 'Adrián'
console.log(fun()); // Return >> 'Adrián Marrero'
console.log(last_name); // Return >> Last_name is not defined
