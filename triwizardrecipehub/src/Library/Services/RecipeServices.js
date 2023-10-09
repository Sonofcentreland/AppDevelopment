class Recipe {
     rid = ""; title = ""; ingredients = ""; instructions = ""; tips = ""; value = ""; image = null; authorId = null; genreIds = [];

     RecipeForm(recipe) {
          const RecipeForm = new FormData();
          const emptyImage = new File([new Uint8Array(0)], 'empty-image.png', { type: 'image/png' });

          RecipeForm.append('title', recipe.has('title') ? recipe.get('title') : '');
          RecipeForm.append('ingredients', recipe.has('ingredients') ? recipe.get('ingredients') : '');
          RecipeForm.append('instructions', recipe.has('instructions') ? recipe.get('instructions') : '');
          RecipeForm.append('tips', recipe.has('tips') ? recipe.get('tips') : '');
          RecipeForm.append('value', recipe.has('value') ? recipe.get('value') : '');
          RecipeForm.append('image', recipe.has('profile') ? recipe.get('image') : emptyImage);
          RecipeForm.append('authorId', recipe.has('authorId') ? 1 : 1);
          RecipeForm.append('genreIds', recipe.has('genreIds') ? [1] : [1]);
 
          return RecipeForm;
     }

     getRecipeForm() {
          const RecipeForm = new FormData();
          const emptyImage = new File([new Uint8Array(0)], 'empty-image.png', { type: 'image/png' });

          RecipeForm.append('title',this.title);
          RecipeForm.append('ingredients',this.ingredients);
          RecipeForm.append('instructions',this.instructions);
          RecipeForm.append('tips',this.tips);
          RecipeForm.append('value',this.value);
          RecipeForm.append('image',this.image);
          RecipeForm.append('authorId',this.authorId);
          RecipeForm.append('genreIds',this.genreIds);
 
          return RecipeForm;
     }
}
const RecipeState = new Recipe();
export {
     Recipe,
     RecipeState,    
}