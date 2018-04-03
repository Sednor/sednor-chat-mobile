import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import Button from '../components/common/Button';

import { AUTH_COMPONENTS_STYLES as styles } from '../styles/components/auth';

export default class SignIn extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {
    }
  };

  state = {
    email: '',
    password: ''
  };

  handleSubmit() {
    this.props.onSubmit(this.state.email, this.state.password);
  }

  render() {
    return (
        <View>
          <TextInput
              style={styles.input}
              value={this.state.email}
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={email => this.setState({ email })} />
          <TextInput
              ref={input => this.passwordInput = input}
              style={styles.input}
              value={this.state.password}
              placeholder="Password"
              returnKeyType="go"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={password => this.setState({ password })} />
          <Button text="Sign In" style={styles.button} onPress={() => this.handleSubmit()} />
        </View>
    );
  }
}
