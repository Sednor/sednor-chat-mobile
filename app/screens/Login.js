import React from 'react';
import { AsyncStorage, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '../components/common/Button';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import { LOGIN_SCREEN_STYLES as styles } from '../styles/screens/login';

export default class Login extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  static views = {
    signIn: 0,
    signUp: 1
  };

  state = {
    view: Login.views.signIn
  };

  handleSignIn(email, password) {
    let token;

    return axios
        .post('https://sednor-chat-server.herokuapp.com/api/v1/auth/signin', {
          params: {
            email,
            password
          }
        })
        .then(res => {
          if (res) {
            token = res.headers.authorization;

            return AsyncStorage.setItem(res.headers.authorization);
          }

          throw new Error();
        })
        //.then(() => axios.get('https://sednor-chat-server.herokuapp.com/api/v1/auth/current', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // }))
        .then(res => console.log(token));
  }

  handleSignUp(user) {
    return axios
        .post('https://sednor-chat-server.herokuapp.com/api/v1/auth/signup', {
          params: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
          }
        })
        .then(() => axios.get('https://sednor-chat-server.herokuapp.com/api/v1/auth/current'))
        .then(res => console.log(res));
  }

  render() {
    const SIGN_IN = this.state.view === Login.views.signIn;
    const SIGN_UP = this.state.view === Login.views.signUp;

    return (
        <View style={styles.wrapper}>
          <StatusBar hidden />
          <Text style={styles.titleContainer}>
            <Text style={styles.title}>SEDNOR</Text>
          </Text>
          <View style={styles.loginContentContainer}>
            <Text style={styles.contentHeader}>Sednor Chat</Text>
            <View style={styles.toggleButtonsContainer}>
              <Button text="Sign In"
                      active={SIGN_IN}
                      style={styles.toggleButtons}
                      onPress={() => this.setState({ view: Login.views.signIn })} />
              <Button text="Sign Up"
                      active={SIGN_UP}
                      style={styles.toggleButtons}
                      onPress={() => this.setState({ view: Login.views.signUp })} />
            </View>
            {
              SIGN_IN ?
                  <SignIn onSubmit={(email, password) => this.handleSignIn(email, password)} /> :
                  <SignUp onSubmit={user => this.handleSignUp(user)} />
            }
            <Text style={styles.separator}>or</Text>
            <View style={styles.externalButtonsContainer}>
              <Button text="Google"
                      style={styles.externalButtons} />
              <Button text="Facebook"
                      style={styles.externalButtons} />
            </View>
          </View>
          <Text style={styles.footerContainer}>
            <Text>sednor.net</Text>
          </Text>
        </View>
    );
  }
}
