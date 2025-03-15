import React from 'react'
import '../styles/global.css'


function CardBeneficio({ title, descricao, image }) {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="cardImage" />}
            <div className="contCard">
                <div className="cardTitulo">
                {title}
            </div>
            <div className="cardDescricao">
                {descricao}
            </div>
            </div>
            
        </div>
    )
}

export default CardBeneficio