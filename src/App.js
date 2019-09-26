import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfsdf', name: 'Max', age:28 },
      { id: 'dsgags', name: 'Adam', age:23 },
      { id: 'dsggaa', name: 'Steph', age:25 }
    ],
    otherState: "some other state",
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
<<<<<<< HEAD

=======
>>>>>>> cd707325b9fc380592e2c1fdf29d8b359d36319a
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = [...this.state.persons]
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.nameChangedHandler(event, p.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
