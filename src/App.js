import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Notes from './components/Notes';
import AddNotes from './components/AddNotes';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        title: "this is the first note",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "this is the second note",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "this is the third note",
        completed: false
      }
    ]
  }

  //commented out after destructuring 
  // markComplete = () => {
  //   console.log('markComplete App.js');
  // }

  //Mark Complete 
  markComplete = (id) => {
    //console.log(id)
    this.setState({
      notes: this.state.notes.map(notes => {
        if (notes.id === id) {
          notes.completed = !notes.completed
        }
        return notes;
      })
    });
  }

  //Delete Note
  delNote = (id) => {
    //console.log(id)
    this.setState({ notes: [...this.state.notes.filter(notes => notes.id !== id)] });
  }

  //Add Notes
  AddNotes = (title) => {
    //console.log(title);
    const newNotes = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ notes: [...this.state.notes, newNotes] });
  }

  render() {
    //console.log(this.state.notes);
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddNotes AddNotes={this.AddNotes} />
                <Notes notes={this.state.notes} markComplete={this.markComplete}
                  delNote={this.delNote} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


