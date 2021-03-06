import * as React from 'react';

import PubHome from './pages/PubHome';
import PubRanking from './pages/PubRanking';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialBottomTabNavigator();
Icon.loadFont();

export default function PubPage() {
    return (
        <Tab.Navigator
            activeColor="#FFAC2C"
            inactiveColor="#D3CEC4"
            barStyle={{ backgroundColor: '#1F2933' }}>
                
            <Tab.Screen name="PubHome"
                component={PubHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="beer" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="PubRanking"
                component={PubRanking}
                options={{
                    tabBarLabel: 'Ranking',
                    tabBarIcon: ({ color }) => (
                        <Icon name="insert-chart" color={color} size={26} />),
                }}
            />
        </Tab.Navigator>
    );
}