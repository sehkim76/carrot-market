import React from 'react'
import { IconType } from 'react-icons';

interface CategoryBoxPros {
    label : string;
    path : string;
    icon : IconType;
    selected? : boolean
}

const CategoryBox : React.FC<CategoryBoxPros> = (
    {
     icon : Icon, label, path, selected   
    }
) => {
  return (
    <div>
        <Icon size={26}/>
        <div>
            {label}
        </div>
    </div>
  )
}

export default CategoryBox