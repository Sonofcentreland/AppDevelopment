import './AddRecipe.css'
import { useEffect, useState } from 'react'
import { Recipe, RecipeServices } from '../../Library/Services/RecipeServices';
import { useFunctions } from '../../Library/Functions/Functions';
import { useParams } from 'react-router-dom';

function AddRecipe() {
     const {rid} = useParams();
     const { createRecipe, updateRecipe, convertFile } = useFunctions();
     const [recipe,setRecipe] = useState(new Recipe().Recipe());
     const [error,setError] = useState({});
     const [image, setImage] = useState(null);
     console.log(rid)
     const handleChange = (e) => {
          const {name, value, files} = e.target;

          if (name === 'image' && files.length > 0) {
               const file = files[0];
               setImage(URL.createObjectURL(file));
               convertFile(file).then((blob) => {
                    recipe.set(name,blob)
                    setRecipe(recipe);
                    setError({});
               });
          }
          else {
               recipe.set(name,value);
               setRecipe(recipe);
               setError({});
          }
     }
     
     const handleSubmit = (e) => {
          e.preventDefault();
          // RecipeServices.updateRecipe(rid,recipe);
          createRecipe(recipe);
          // if(rid === undefined){
               // }
               // else{
                    // }
          
          console.log(error);
     }

     useEffect(() => {
          if(rid != undefined){
               RecipeServices.getRecipe(rid)
               .then(res => {
                    setRecipe(new Recipe().RecipeJson(res.data));
               })
          }
	}, [])

     return(
          <>
               <div className="addrecipe">
                    <div className="content">
                         <div className="image">
                              <div className="input">
                                   <input
                                   onChange={handleChange}
                                   type='file'
                                   name='image'
                                   id='image'
                                   />
                              </div>
                              {(image !== null) ? (
                                   <img src={image} alt=''/>
                              ): (
                                   <img src={image} alt=''/> 
                              )}
                         </div>
                         <form onSubmit={handleSubmit} className='form'>
                              <div className="input">
                                   <input
                                   onChange={handleChange}
                                   type='text'
                                   name='title'
                                   id='title'
                                   value={recipe.get('title')}
                                   placeholder='Enter your title'
                                   />
                              </div>
                              <div className="input">
                                   <input
                                   onChange={handleChange}
                                   type='text'
                                   name='ingredients'
                                   id='ingredients'
                                   value={recipe.get('ingredients')}
                                   placeholder='Enter your ingredients'
                                   />
                              </div>
                              <div className="textarea">
                                   <textarea
                                   onChange={handleChange}
                                   type='text'
                                   name='instructions'
                                   id='instructions'
                                   value={recipe.get('instructions')}
                                   placeholder='Enter your instructions'
                                   />
                              </div>
                              <div className="textarea">
                                   <textarea
                                   onChange={handleChange}
                                   type='text'
                                   name='tips'
                                   id='tips'
                                   value={recipe.get('tips')}
                                   placeholder='Enter your tips'
                                   />
                              </div>
                              <div className="textarea">
                                   <textarea
                                   onChange={handleChange}
                                   type='text'
                                   name='value'
                                   id='value'
                                   value={recipe.get('value')}
                                   placeholder='Enter your value'
                                   />
                              </div>
                              <div className="input">
                                   <input
                                   onChange={handleChange}
                                   type='text'
                                   name='genres'
                                   id='genres'
                                   value={recipe.get('genres')}
                                   placeholder='Enter your genre'
                                   />
                              </div>
                              <div className='button'>
                                   <button type='submit'>ADD</button>
                              </div>
                         </form>
                    </div>
               </div>
          </>
     );
}

export default AddRecipe;
