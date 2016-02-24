import React, {
    Component,
    Text,
    StyleSheet
} from 'react-native';

class DayItem extends Component {
    color() {
        const divider = this.props.daysUntil === 0 ? 1 : this.props.daysUntil;
        const opacity = 1 / divider;
        return `rgba(0, 0, 0, ${opacity})`;
    }
    fontWeight() {
        const weight = 7 - this.props.daysUntil;
        return weight * 100;
    }
    fontSize() {
        return 60 - 6 * this.props.daysUntil;
    }
    lineHeight() {
        return 70 - 4 * this.props.daysUntil;
    }
    style() {
        return {
            color: this.color(),
            fontWeight: `${this.fontWeight()}`,
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    }
    render() {
        return (
            <Text style={this.style()}>{this.props.day}</Text>
        )
    }
}

export default DayItem;
