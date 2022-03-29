import React from 'react';
import {Navigation} from 'react-native-navigation';
import {JancukPage} from './src/App';

Navigation.registerComponent('Home', () => JancukPage);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              id: 'Home',
            },
          },
        ],
      },
    },
  });
});
