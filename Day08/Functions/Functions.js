import { createContext, useContext } from "react";
import { useState } from "react";
import { User, UserServices, UserState } from "../Services/UserServices";

const Context = createContext();
export const Functions = ({ children }) => {
     const [ user, setUser ] = useState(new User());

     const toggle = ((value) => {
          return !value;
     });
     
     const createUser = (user) => {
          UserServices.createUser(UserState.UserForm(user))
          .then(response => {
               console.log(response);
          })
     }

     
     return(
          <Context.Provider value={{
               toggle,     
               user,setUser,
               createUser,
          }}
          >{children}
          </Context.Provider>
     );
};
export const useFunctions = () => useContext(Context);