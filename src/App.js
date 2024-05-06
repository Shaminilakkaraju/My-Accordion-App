import React from 'react';
import Accordion from './components/Accordion';
import './components/Accordion.css';

const accordionData = [
  {
    title: 'What is React?',
    content: ' React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.'
  },
  {
    title: 'What is a component in React?',
    content: 'A component is a reusable piece of code that represents a part of a user interface. Components can be nested within other components to create complex UIs.'
  },
  {
    title: 'What are props in React? ',
    content: 'Props (short for properties) are a way to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component.'
  }
];

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default App;
