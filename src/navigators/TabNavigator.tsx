import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import HomeScreen from '../screens/HomeScreen';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
