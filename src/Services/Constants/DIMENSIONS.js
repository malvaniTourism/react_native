import { Dimensions } from "react-native";

const DIMENSIONS = {
    screenHeight: Dimensions.get('screen').height,
    windowHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('screen').width,
    windowWidth: Dimensions.get('window').width,
};

export default DIMENSIONS;