function showSalary(users, age) {
  let arr = [];
  for (let i=0; i<users.length; i++) {
    if(users[i].age <= age) {
      arr.push(users[i]);
    }
  }
  let str = "";
  for (let i=0; i<arr.length; i++) {
    str += `${arr[i].name}, ${arr[i].balance}`;
    if(i !== arr.length-1) {
      str += "\n";
    }
  }
  return str;
}
