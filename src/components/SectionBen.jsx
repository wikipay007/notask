import React from 'react';
import ScrollReveal from './ScrollReveal';
import '../styles/ScrollReveal.css';

function SectionBen() {
  return (
    <div className="section-ben">
        <div className="direitaSection">
            <div className="cards">

            </div>

        </div>
        <div className="esquerdaSection">
            <ScrollReveal
        baseOpacity={10}
        enableBlur={true}
        baseRotation={10}
        blurStrength={10}
        classname="section-ben"
      >
        Feito para quem quer organizar as coisas de forma rápida.
        {/* Adicione mais cards conforme necessário */}
      </ScrollReveal>
        </div>
      
    </div>
  );
}

export default SectionBen;