import React, {Component} from 'react';
import {Dimensions, Plataform} from 'react-native';
import { createStackNavigator, createBottomTabNavigattor, Tabnavigattor, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Notas from './screens/Notas';
import Materiais from './screens/Materias';
import NovaNota from './screens/NovaNota';
import Perfil from './screens/Perfil';
import Sobre from './screens/Sobre';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Notas': {
        screen: Notas,
        navigationOption: {
            tabBarLabel: 'Notas',
            tabBarIcon: ({tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    'Materias': {
        screen: Materias,
        navigationOption: {
            tabBarLabel: 'Materias',
            tabBarIcon: ({tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },   
    'NovaNota': {
        screen: NovaNota,
        navigationOption: {
            tabBarLabel: 'NovaNota',
            tabBarIcon: ({tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    'Perfil': {
        screen: Perfil,
        navigationOption: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    'Sobre': {
        screen: Sobre,
        navigationOption: {
            tabBarLabel: 'Sobre',
            tabBarIcon: ({tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    }
});                                 