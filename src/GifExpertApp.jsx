import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['the office']);
  
  const addCategory = ( category ) => {

    if(categories.includes(category)) return;

    setCategories( [ category,... categories] );
  }

  const deleteCategory = ( e ) => {
    
    const categoryName = e.target.id;
    const newCategories = categories.filter( 
      (category) => category != categoryName );
    setCategories(newCategories);
  }

  return (
    <>  
      <h1>GiftExpertApp</h1>

      <AddCategory onAddCategory = { addCategory } />
      <br />
      <br />
      <ol>
        { categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category} 
            onDeleteCategory={deleteCategory}  />
        )) 
        }
      </ol>
    </>
  )
}
