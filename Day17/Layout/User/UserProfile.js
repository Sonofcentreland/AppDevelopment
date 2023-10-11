import './UserProfile.css';
import React, { useEffect, useState } from 'react'
import AddRecipe from '../AddRecipe/AddRecipe';
import { UserServices } from '../../Library/Services/UserServices';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
	const navigate = useNavigate();
	const [recipes,setRecipes] = useState([]);
	const [user,setUser] = useState({});
	const getRecipesOfUser = async () => {
		await UserServices.getUser(localStorage.getItem('userId')).then((response) => {
			setRecipes(response.data.recipes);
			setUser(response.data);
			console.log(response);
		}).catch((err) => { console.log(err); })
	}
	useEffect(() => {
		getRecipesOfUser();
	}, [])
	return (
		<>
			<div className="userprofile">
				<div className="bio">
					<div className="details">
						<p>USERNAME:&nbsp;{user.username}</p>
						<p>NAME:&nbsp;{user.name}</p>
						<p>EMAIL:&nbsp;{user.email}</p>
					</div>
					<div className="button">
						<button onClick={()=>{navigate("/user/add/recipe")}} >ADD RECIPE</button>
					</div>
				</div>
				<div className="recipes">
					{recipes?.map((recipe,index)=> {
						return(
							<div key={index} className="recipe">
								<div key={index} className="content">
									<div className="image">
										<img src={`data:image;base64,${recipe.image}`} alt="img" />
									</div>
									<div className="text">
										<p>Title:{recipe.title}</p>
										<p>ingredients:{recipe.ingredients}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default UserProfile;