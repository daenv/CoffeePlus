import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgUri from 'react-native-svg-uri';
import { BlurView } from 'expo-blur';
import { COLORS } from '../theme/theme';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHIstoryScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => <BlurView style={styles.BlurViewStyles} tint="dark" intensity={100} />,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="home"
                                color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                                size={size}
                            />
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="cart"
                                color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                                size={size}
                            />
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Favorite"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="heart"
                                color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                                size={size}
                            />
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="History"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="bell"
                                color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                                size={size}
                            />
                        );
                    },
                }}
            ></Tab.Screen>
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
