import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import UserModel from '../models/UserModel';

import Button from '../components/common/Button';

import { AUTH_COMPONENTS_STYLES as styles } from '../styles/components/auth';

export default class SignUp extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {
    }
  };

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit() {
    this.props.onSubmit({
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password
    });
  }

  render() {
    return (
        <View>
          <TextInput
              style={styles.input}
              value={this.state.email}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="go"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.firstNameInput.focus()}
              onChangeText={email => this.setState({ email })}
          />
          <View style={styles.inputsWrapper}>
            <TextInput
                ref={input => this.firstNameInput = input}
                style={styles.smallInput}
                value={this.state.firstName}
                placeholder="First Name"
                returnKeyType="go"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                onSubmitEditing={() => this.lastNameInput.focus()}
                onChangeText={firstName => this.setState({ firstName })}
            />
            <TextInput
                ref={input => this.lastNameInput = input}
                style={styles.smallInput}
                value={this.state.lastName}
                placeholder="Last Name"
                returnKeyType="go"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={lastName => this.setState({ lastName })}
            />
          </View>
          <TextInput
              ref={input => this.passwordInput = input}
              style={styles.input}
              value={this.state.password}
              placeholder="Password"
              returnKeyType="go"
              underlineColorAndroid="transparent"
              secureTextEntry
              onSubmitEditing={() => this.confirmPasswordInput.focus()}
              onChangeText={password => this.setState({ password })}
          />
          <TextInput
              ref={input => this.confirmPasswordInput = input}
              style={styles.input}
              value={this.state.confirmPassword}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
          <Button text="Sign Up" style={styles.button} onPress={() => this.handleSubmit()} />
        </View>
    );
  }
}
