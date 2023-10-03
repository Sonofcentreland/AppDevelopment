class Recipe{

     rid = ""; title = ""; ingredients = ""; genre = []; instructions = ""; tips = ""; value = ""; image = null; author = "";
 
     RecipeForm(){
         const RecipeForm = new FormData();
 
         RecipeForm.append("title", this.title);
         RecipeForm.append("ingredients", this.ingredients);
         RecipeForm.append("genre", this.genre);
         RecipeForm.append("instructions", this.instructions);
         RecipeForm.append("tips", this.tips);
         RecipeForm.append("value", this.value);
         RecipeForm.append("image", this.image);
         RecipeForm.append("author", this.author);
 
         return RecipeForm;
     }
}