import React, { Component } from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

class Notes extends Component {

    //adding markComplete
    // markComplete = () => 
    //     //console.log('markComplete');
    // }

    render() {
        //console.log(this.props.notes)
       
        //commented out in place of map 
        // return ( 
        //     <div>
        //         <h1>Notes</h1>
        //     </div>

        
        return this.props.notes.map((notes) => (
            //this will loop through notes and return each title
            //<h3> { notes.title } </h3>

        //return NoteItem
        //markComplete() gets added later
        //markComplete() commented out, becomes props.markComplete to App.js
        <NoteItem key={notes.id} notes={notes} markComplete = {this.props.markComplete} 
        delNote={this.props.delNote}
        />
        ));
    }
}

//PropTypes ARRAY
Notes.prototypes = {
    notes: PropTypes.array.isRequired
}

export default Notes;