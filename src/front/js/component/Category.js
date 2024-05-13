import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";


export const Category =()=>{

    const { store, actions } = useContext(Context);
    const [selectOption, setSelectOption]= useState('Choose your category')
    const [newCategory, setNewCategory] = useState('')

    const handleClick =(name)=>{
        setSelectOption(name)
    }

    const handleInputChange =(e)=>{
        setNewCategory(e.target.value)
    }

    const handleAddCategory =()=>{
        actions.addCategory(newCategory)
        setNewCategory('')
    }


    const handleEditCategory =()=>{
        if(selectOption === 'Choose your category'){
            alert('Please select a category to edit')
            return;
        }
        actions.editCategory(newCategory, store.allCategory.find(category=> category.name === selectOption).id);
        setNewCategory('')
    }

    const handleDeleteCategory =(categoryId)=>{
        actions.deleteCategory(categoryId)
    }


    return (
        <div className="conteiner-principal">
            <div className="btn-group">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectOption}
                </button>
                <ul className="dropdown-menu">
                    {store.allCategory.map((element)=> <button style={{"background": "black", "color":"white"}} onClick={()=>handleClick(element.name)} key={element.id}>{element.name}</button>)}
                </ul>
            </div>

            <div className="add-category">
                <h3>Can't find your category? Add, edit or delete it.</h3>
                <input
                type="text"
                placeholder="write something"
                value={newCategory}
                onChange={handleInputChange}
                />
                <button onClick={handleAddCategory}>
                    add category
                </button>
                <button onClick={handleEditCategory}>
                    edit category
                </button>
                <button onClick={()=>handleDeleteCategory(store.allCategory.find(category => category.name === selectOption).id)} >
                    delete category
                </button>
            </div>
        </div>
    )
}