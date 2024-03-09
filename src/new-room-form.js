import React from 'react';

export default class NewRoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nameValue: '', 
            areaValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue : e.target.value});
    }

    handleAreaChange(e) {
        this.setState({areaValue : e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        this.props.addNewRoom(this.props.data, {
            name: this.state.nameValue, 
            area: this.state.areaValue
        });
        this.setState({nameValue: '', areaValue: ''});    
    }

    /*render() {
        return (
            <div>
            <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
            <input type="text" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areaValue} />
            <button onClick={this.handleClick}> Add Room</button>
            </div>*/
    
render() {
    return (
        <div>
            <input
                type="text"
                id="roomName"  // Add an id attribute
                placeholder="Name"
                onChange={this.handleNameChange}
                value={this.state.nameValue}
            />
            <input
                type="text"
                id="roomArea"  // Add an id attribute
                placeholder="Area"
                onChange={this.handleAreaChange}
                value={this.state.areaValue}
            />
            <button onClick={(e) => this.handleClick(e)}> Add Room</button>
        </div>
        );
        }
    }
