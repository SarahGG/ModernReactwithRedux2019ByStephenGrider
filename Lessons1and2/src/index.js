// 1. Import the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// 2. Import our own files
import './index.css';
// 3. ?????
import * as serviceWorker from './serviceWorker';


const App = () => {
    return (
    <div>
        <label htmlFor = "name"
               className = "label" >
            {getLabelText()}</
            label>
        <input id="name" />
        <button className="button" style={myStyle}>
            {myStyle.text}</
            button>
    </div>
    );
};

// calling something by name
const buttonText = 'Click Here';

// calling something by function
function getLabelText() {
    return 'Enter name: ';
}

// calling something as an Object
const myStyle = { text: buttonText, color: '#FBEAFF', backgroundColor: '#4D8076' };

ReactDOM.render(
    <App />, document.querySelector('#root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 3. Take the React component and get it to show up on the screen.
