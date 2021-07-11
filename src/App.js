import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//   const usersPosition = window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   console.log(usersPosition);
//   return (
//     <>
//       <h1>Latitude: </h1>
//       <SeasonDisplay />
//     </>
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: null,
//       errMessage: '',
//     };

//     window.navigator.geolocation.getCurrentPosition(
//       (position) =>
//         this.setState({
//           latitude: position.coords.latitude,
//         }),
//       (err) =>
//         this.setState({
//           errMessage: err.message,
//         })
//     );
//   }
//   render() {
//     return (
//       <>
//         {this.state.latitude !== null ? (
//           <h1>Latitude: {this.state.latitude}</h1>
//         ) : this.state.errMessage !== '' ? (
//           <h1>Error: {this.state.errMessage}</h1>
//         ) : (
//           'Loading...'
//         )}
//       </>
//     );
//   }
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     errMessage: '',
  //   };
  // }
  state = {
    latitude: null,
    errMessage: '',
  };

  // Loads on initial mount
  componentDidMount() {
    console.log('My component was rendered to the screen');
    // Get users current position
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
        }),
      (err) =>
        this.setState({
          errMessage: err.message,
        })
    );
  }

  // Loads on each page update
  componentDidUpdate() {
    console.log('My component was updated - it re-rendered');
  }

  renderContent() {
    return this.state.latitude !== null ? (
      <SeasonDisplay lat={this.state.latitude} />
    ) : this.state.errMessage !== '' ? (
      <h1>Error: {this.state.errMessage}</h1>
    ) : (
      <Spinner message='Please accept location request...' />
    );
  }

  render() {
    return (
      <>
        {this.renderContent()}
      </>
    );
  }
}

export default App;
