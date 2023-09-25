import { userAxios } from "../Axios/axios";

class User{
     uid = ""; fullname = ""; username = ""; email = ""; mobile = ""; password = ""; confirm_password = ""; profile = null;

     UserForm(user) {
          const UserForm = new FormData();
          const emptyImage = new File([new Uint8Array(0)], 'empty-image.png', { type: 'image/png' });
        
          UserForm.append('username', user.has('username') ? user.get('username') : '');
          UserForm.append('fullname', user.has('fullname') ? user.get('fullname') : '');
          UserForm.append('email', user.has('email') ? user.get('email') : '');
          UserForm.append('mobile', user.has('mobile') ? user.get('mobile') : '');
          UserForm.append('profile', user.has('profile') ? user.get('profile') : emptyImage);
          UserForm.append('password', user.has('password') ? user.get('password') : '');
        
          return UserForm;
     }
        

     onSignup(){
          const UserForm = new FormData();
  
          UserForm.append("fullname", this.fullname);
          UserForm.append("username", this.username);
          UserForm.append("email", this.email);
          UserForm.append("mobile", this.mobile);
          UserForm.append("password", this.password);
          UserForm.append("confirm_password", this.confirm_password);
  
          return UserForm;
     }

     onLogin(){
          const UserForm = new FormData();

          UserForm.append("username", this.username);
          UserForm.append("password", this.password);
  
          return UserForm;
     }
}

class UserAxios{
     createUser(user) {
          return userAxios.post("signup", user);
     }
     getUser(username,password) {
          return userAxios.post("login", username,password);
     }
}
const UserServices = new UserAxios();
const UserState = new User();
export {
     UserServices,
     User,
     UserState,
};