const models= require('./database/models');

const Role = models.Roles;
const Comment = models.Comment;
const Events = models.Event;
const Post =models.Post;
const User = models.User;
const Ticket = models.Ticket;
const Groups =models.Groups;

Role.create({
 role_name: "host",
 permission_id: 4532
}).then((newrole) => {
  console.log(newrole.get());
}).catch((err)=>{
  console.log('Error while creating role')
});
User.bulkCreate([
  { first_name: 'John', last_name:"doe", email:'john-doe@domain.com', password:'123456',phone:23456788, roleId:1, dob:32/54/2322},
  { first_name: 'Jon', last_name:"doe", email:'jhn-doe@domain.com', password:'123456',phone:23456788, roleId:1, dob:32/54/2322},
  { first_name: 'Jhn', last_name:"doe", email:'jhn-doe@domain.com', password:'123456',phone:23456788, roleId:1, dob:32/54/2322},
  { first_name: 'Joh', last_name:"doe", email:'jon-doe@domain.com', password:'123456',phone:23456788, roleId:1, dob:32/54/2322},
]).then((newuser)=>{
  console.log(newuser);
}).catch((err)=>{
  console.log("Error while creatinf new user", err);
})

User.findOne({
  where: {email: 'john-doe@domain.com'}, include: 'usergroups'
})
.then((findedUser) => {
  // Get the User with Company datas included
  console.log(findedUser)
  // Get the company record only
  // console.log(findedUser.company)
})
.catch((err) => {
  console.log("Error while find user : ", err)
})


Groups.bulkCreate([
  {
    group_name: 'Monday',
    group_track: "elevate",
  },
  {
    group_name: 'Tuse',
    group_track: "creas",
  },
  {
    group_name: 'Wed',
    group_track: "elevatedsd",
  }
]).then((groupss)=>{
  User.findAll({where: {id: [1, 2, 3]}, include: ['usergroups']})
  .then((users)=>{
      users.forEach((user)=>{
        console.log(user);
        console.log(groupss);
      })
  }).catch((err) => {
    console.log("consoling users err", err);
  })
}).catch((err)=> {
  console.log("consoling group err", err);
})
