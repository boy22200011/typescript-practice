function CreateMember(member: agmp_interface.IMember) {
  console.log(member.ID)
}

let obj = {
  ID: 1,
  Name: 'Nick'
}

CreateMember(obj)
