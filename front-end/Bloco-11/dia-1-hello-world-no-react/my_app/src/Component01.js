import React from 'react';
// import App from 'App.css';

const tasks = ['comer', 'dormir', 'pedalar', 'sair', 'estudar'];

const task = (value)=> {
    return (
      <li>{value}</li>
     )
  }

  class Activies extends React.Component {
      render () {
          return (
              <ol>
                  <li>
                      {tasks.map((item) => task(item))};
                  </li>
              </ol>
          )
      }
  }
  export default Activies; 
