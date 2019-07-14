import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
//this is the very first function i.e. going to be called any time the instance of this class is created
  constructor(props){
    super(props);
    //reference to the parents constructor function
    this.state = {lat: null};
    //initialising the state

    window.navigator.geolocation.getCurrentPosition(
      //first argument is a callback function
      (position) => {
        //we called setState!!!!!!!!!
        this.setState({ lat: position.coords.latitude});

        //we did not!!
        //this.state.lat = position.coords.latitude;
      },
      err => console.log(err)
    );
  }
  //React says we have to define render!!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
