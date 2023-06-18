import React, { useState } from 'react';
import './services.css'

const ListWithDropdown = () => {
  const [activeItem, setActiveItem] = useState(null);

  const listItems = [
    {
      id: 1,
      title: 'Повышение успеваемости',
      content: 'Текст про повышение успеваемости. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст.'
    },
    {
      id: 2,
      title: 'Подготовка к ОГЭ',
      content: 'Текст про подготовку к ОГЭ. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст.' },
    { id: 3,
      title: 'Третья услуга',
      content: 'Здесь еще про что-то рассказать можно. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст. Тестовый текст.' },
  ];

  const handleClick = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <div style={{fontFamily: 'Noto Serif'}}>
      {listItems.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)} className='w-full cursor-default'>
          <div className='border rounded-xl border-pink-200 p-2 text-left bg-red-200'>
            <a
              className={activeItem === item.id ? 'opened' : 'closed'}
            > > </a>
            {item.title}
          </div>
          {activeItem === item.id &&
            <div className='p-2 text-justify bg-amber-50 border rounded-xl border-amber-200'>
              {item.content}
            </div>}
        </div>
      ))}
    </div>
  );
};

export default ListWithDropdown;
