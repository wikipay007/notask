import React from 'react'

function CardBeneficio({ title, descricao, image }) {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="cardImage" />}
            <div className="cardTitulo">
                {title}
            </div>
            <div className="cardDescricao">
                {descricao}
            </div>
        </div>
    )
}

export default CardBeneficio