import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Moment from 'moment';
import DayItem from './src/day-item';

class Weekdays extends Component {
    getDays() {
        let daysArray = [];

        for (let i = 0; i < 7; i++) {
            let day = Moment().add(i, 'days').format('dddd');
            daysArray.push(<DayItem day={day} daysUntil={i} />);
        }

        return daysArray;
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