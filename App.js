import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import Application from './app/components/Application';

import { APP_STYLES as styles } from './app/styles/components/app';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

export default class App extends React.Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.appContainer}>
            <Application />
          </View>
        </KeyboardAvoidingView>
    );
  }
}
