import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Weekdays extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Days of the week</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// 'weekdays' -> Name of the application
AppRegistry.registerComponent('weekdays', () => Weekdays);