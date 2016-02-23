import React, {
    Text,
    StyleSheet
} from 'react-native';

const DayItem = ({day}) => {
    return (
        <Text style={styles.day}>{day}</Text>
    )
}

const styles = StyleSheet.create({
    day: {
        fontSize: 18,
        color: '#000fff'
    }
});

export default DayItem;
