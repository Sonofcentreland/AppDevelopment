class Recipe{

     rid = ""; title = ""; ingredients = ""; instructions = ""; tips = ""; value = ""; image = null; author = "";
 
     getRecipeAsForm(){
         const RecipeForm = new FormData();
 
         RecipeForm.append("title", this.title);
         RecipeForm.append("ingredients", this.ingredients);
         RecipeForm.append("instructions", this.instructions);
         RecipeForm.append("tips", this.tips);
         RecipeForm.append("value", this.value);
         RecipeForm.append("image", this.image);
         RecipeForm.append("author", this.author);
 
         return RecipeForm;
     }
 }