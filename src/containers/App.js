import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Person/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
    this.state = {
      persons: [
        { id: 'asfsdf', name: 'Max', age:28 },
        { id: 'dsgags', name: 'Adam', age:23 },
        { id: 'dsggaa', name: 'Steph', age:25 }
      ],
      otherState: "some other state",
      showPersons: false
    }
  }
  /*
  //more modern way of doing the above initialization in the constructor
  state = {
    persons: [
      { id: 'asfsdf', name: 'Max', age:28 },
      { id: 'dsgags', name: 'Adam', age:23 },
      { id: 'dsggaa', name: 'Steph', age:25 }
    ],
    otherState: "some other state",
    showPersons: false
  }
  */

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
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
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}

        />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
