import { Dimensions } from "react-native";

const sh = Dimensions.get('screen').height;
const wh = Dimensions.get('window').height;
const sw = Dimensions.get('screen').width;
const ww = Dimensions.get('window').width;

const DIMENSIONS = {
    screenHeight: sh,
    windowHeight: wh,
    screenWidth: sw,
    windowWidth: ww,
    halfWidth: sw / 2,
    bannerWidth: sw - 40
};

export default DIMENSIONS;