     // import { useSelector } from 'react-redux';
// import Navbar from '../../Layout/Navbar/Navbar';
// import Sidebar from '../../Layout/Sidebar/Sidebar';
// import '../../Components/Dashboard/Dashboard.css';
// import { selectUser } from '../../Redux/UserSlice';

import { useState } from "react";
import { Recipe, RecipeState } from "../../Library/Services/RecipeServices";
import axios from "axios";

// function Accounts() {
//      const users = useSelector(selectUser);
//      return (
//           <>
//                <div className="DashboardBorder">
//                     <div className="DashboardNavBar"><Navbar/></div>
//                     <div className="DashboardSideBar">
//                          <Sidebar/>
//                     </div>
//                     <div className="DashboardContent">
//                          <h3>Welcome to your Accounts Section {users.username}</h3>
//                          <div className='content1'>
//                               <div className='box1'></div>
//                               <div className='box1'></div>
//                               <div className='box1'></div>
//                          </div>
//                     </div>
//                     <div className="DashboardFooter"></div>
//                </div>
//           </>
//      );
//    }
   
//    export default Accounts;


function Accounts() {
     const [recipe, setRecipe] = useState(new Recipe().Recipe());
     console.log(recipe);
     const handleSubmit = (e) => {
          e.preventDefault();
          console.log(RecipeState.RecipeForm(recipe));
          axios.post("http://localhost:8808/recipehub/recipe/create",RecipeState.RecipeForm(recipe),{
               headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                  }
          })
          .then(response => {
               console.log(response);
          })
     };
     const handleChange = (e) => {
          const { name, value } = e.target;

            const updatedRecipe = new Recipe().Recipe();
        
            for (const [key, val] of recipe.entries()) {
              updatedRecipe.set(key, val);
            }
            updatedRecipe.set(name, value);
        
            setRecipe(updatedRecipe);
     };
     
     return (
          <>
               <div>
                    <form onSubmit={handleSubmit}>
                    <input
                         onChange={handleChange}
                         type='text'
                         name='title'
                         id='title'
                         value={recipe.get('title')}
                         placeholder='Enter your title'
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='ingredients'
                         id='ingredients'
                         value={recipe.get('ingredients')}
                         placeholder='Enter your ingredients'
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='instructions'
                         id='instructions'
                         value={recipe.get('instructions')}
                         placeholder='Enter your instructions'
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='tips'
                         id='tips'
                         value={recipe.get('tips')}
                         placeholder='Enter your tips'
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='value'
                         id='value'
                         value={recipe.get('value')}
                         placeholder='Enter your value'
                    />
                    <input
                         onChange={handleChange}
                         type='file'
                         name="image"
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='authorId'
                         id='authorId'
                         value={recipe.get('authorId')}
                         placeholder='Enter your authorId'
                    />
                    <input
                         onChange={handleChange}
                         type='text'
                         name='genreIds'
                         id='genreIds'
                         value={recipe.get('genreIds')}
                         placeholder='Enter your genreIds'
                    />
                    <button type="submit">ADD</button>
               </form>
               </div>
          </>
     );
   }
   
   export default Accounts;