import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../Navigation/BottomTabNavigation';

const Routes = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigation />
    </NavigationContainer>
  );
};
export default Routes;
