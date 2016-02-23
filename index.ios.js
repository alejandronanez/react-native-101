import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import DayItem from './src/day-item';

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

class Weekdays extends Component {
    getDays() {
        return days.map((day, index) => {
            return <DayItem key={index} day={day} />
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Days of the week</Text>
                {this.getDays()}
            </View>
        );
    }
}

/**
 * flexDirection: row
 *     justifyContent: width
 *     alignItems: height
 * flexDirection: column (default)
 *     justifyContent: height
 *     alignItems: width
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// 'weekdays' -> Name of the application
AppRegistry.registerComponent('weekdays', () => Weekdays);