import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  alert: {
    color: 'tomato',
    backgroundColor:'yellow',
    ':hover': {
      backgroundColor: 'tomato',
      color: 'yellow'
    }  
  },
  success: {
    color: 'green'
  }
})

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p className={css(styles.alert, styles.success)}>Lorem ipsum dolor sit amet.</p>
        <p className={css(styles.success)}>Aspernatur iure esse quas officia!</p>
      </div>
    )
  }
}

export default App;
