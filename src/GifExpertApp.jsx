import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

// const apiKey = '4jgNLokhXAsbz0Y3mg8LVtCD12tOycW8';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // setCategories = {setCategories}
                onNewCategory = { onAddCategory }
            />
            <button onClick={onAddCategory}>Agregar</button>
            {
                categories.map(category => 
                    <GifGrid key={category} category={category}/>
            )}
        </>
    )
}
