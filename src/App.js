import React from 'react';
import { getDrinks } from './redux/thunks';
import { connect } from 'react-redux';

class App extends React.Component {
  componentWillMount() {
    this.props.getDrinks();
  }

  render() {
    const { loading, drinks } = this.props
    
    if (loading) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {drinks.drinks.map(brewery =>
            <li>{brewery.strDrink}</li>
          )}
        </ul>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getDrinks: () => dispatch(getDrinks())
});

const mapStateToProps = state => ({
  ...state
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
