import { StyleSheet } from "react-native";
import COLOR from "../../Services/Constants/COLORS.js";
import DIMENSIONS from "../../Services/Constants/DIMENSIONS.js";

const styles = StyleSheet.create({
    topComponent: {
        height: DIMENSIONS.windowHeight * 15 / 100,
        width: DIMENSIONS.windowWidth,
        backgroundColor: COLOR.yellow,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        position: 'absolute'
    },
});

export default styles;