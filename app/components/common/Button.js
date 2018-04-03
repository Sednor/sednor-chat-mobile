import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    style: PropTypes.shape({
      container: PropTypes.object,
      text: PropTypes.object
    }),
    onPress: PropTypes.func
  };

  static defaultProps = {
    text: '',
    disabled: false,
    active: false,
    style: {
      container: {},
      text: {}
    },
    onPress: () => {
    }
  };

  static styles = {
    active: {
      backgroundColor: '#39cccc'
    },
    disabled: {
      opacity: 0.5
    }
  };

  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}
                          disabled={this.props.disabled}
                          style={[
                            this.props.style.container,
                            this.props.active && Button.styles.active,
                            this.props.disabled && Button.styles.disabled
                          ]}>
          <Text style={this.props.style.text}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}
