import React, {Component} from "react";
import PropTypes from "prop-types"; // ES6

import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Key: {this.props.value}</h1>
        <button onClick={this.props.onClick}>Change value</button>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default App;