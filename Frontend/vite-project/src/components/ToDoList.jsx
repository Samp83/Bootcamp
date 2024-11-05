import { useState } from 'react';
import Input from './Input';

function ToDoList() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { text, completed: false }]);
  };

  const toggleItem = (index) => {
    setItems(items.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <Input addItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleItem(index)}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
