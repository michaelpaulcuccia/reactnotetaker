import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.notes.completed ? 
            'line-through' : 'none'
        }
    }

    render() { 
        const {id, title} = this.props.notes;
        return ( 
            <div style={this.getStyle()}>
                {/* <input type='checkbox' onChange={this.props.markComplete}></input> 
                <p> {this.props.notes.title } </p> 
                DESTRUCTURING below 47:38 to mark id as complete*/}

                <input type='checkbox' onChange={this.props.markComplete.bind (this, id)}></input> 
                <p> {title } 
                <button onClick={this.props.delNote.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
         );
    }
}

//PropTypes OBJECT
NoteItem.prototypes = {
    notes: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
 
export default NoteItem;