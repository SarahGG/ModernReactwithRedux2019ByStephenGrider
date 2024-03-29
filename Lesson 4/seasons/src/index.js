import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        } else if(!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonsDisplay lat = {this.state.lat} />
            );
        } else {
            return (
                <Spinner loadText = "Talking about the weather..."/>
            );
        }
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));