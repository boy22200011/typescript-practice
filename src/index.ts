function CreateMember(member: my_interface.IMember) {
  console.log(member.ID)
}

let obj = {
  ID: 1,
  Name: 'Nick'
}

CreateMember(obj)
