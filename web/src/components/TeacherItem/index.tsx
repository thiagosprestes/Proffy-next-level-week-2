import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
        <img src="" alt=""/>
        <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>
        </div>
        </header>

        <p>
        Texto de teste
        </p>

        <footer>
        <p>
            Preço/hora
            <strong>R$ 20,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entre em contato
        </button>
        </footer>
    </article>
  );
}

export default TeacherItem;