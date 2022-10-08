import React from 'react';




const Card = ({item})=>{
    const {name,title,price,category,url} = item
    return (
        
        <div className="main">
            <div className="image">
                <img src={url} alt="name"/>
            </div>
            <div className="title-container">
                <div className="title-header">
                    <p className="title">{name}</p>
                    <p className="price">{price}{"$"}</p>
                </div>
                <p className="category">{category}</p>
                <p className="contents">{title}</p>
            </div>
        </div>
    )
}
export default Card