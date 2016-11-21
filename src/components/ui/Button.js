import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { colours } from 'constants.js';

const componentStyles = StyleSheet.create({
  button: {
    display: 'block',
    backgroundColor: colours.midnightBlue,
    color: colours.clouds,
    padding: 15,
    margin: 5,
    borderRadius: 2,
    textAlign: 'center',
    cursor: 'pointer'
  }
});

export default class Button extends Component {

  render () {
    const { text, ...otherProps } = this.props;
    return (
      <a {...otherProps} className={css(componentStyles.button)}>{text}</a>
    );
  }

}
