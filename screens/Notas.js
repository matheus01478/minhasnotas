import React, { COmponent } from 'react';
import {Stylesheet, Text, View} from 'react-native';

export default class Notas extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.title}>
              Notas
              </Text>
              </View>
        );
    }
}  

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'cenrer',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});    