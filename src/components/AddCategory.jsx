import React, { useState } from 'react'

export const AddCategory = (
    // {setCategories}
    {onNewCategory}
    ) => {

    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = (e) => setInputValue(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 1) return;

        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
