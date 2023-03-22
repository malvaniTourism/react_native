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
    fieldsView: {
        borderWidth: 1,
        borderColor: COLOR.grey,
        borderBottomColor: COLOR.transparent,
        paddingTop: 10,
        marginBottom: -15
    },
    textContainerStyle: {
        width: DIMENSIONS.bannerWidth,
        marginBottom: -16,
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: COLOR.transparent
    },
    searchPanelField: {
        borderRadius: DIMENSIONS.borderRadius
    },
    searchButtonContainerStyle: {
        marginTop: 15,
        borderBottomLeftRadius: DIMENSIONS.borderRadiusSmall,
        borderBottomRightRadius: DIMENSIONS.borderRadiusSmall
    },
    searchButtonStyle: {
        height: 50,
        backgroundColor: COLOR.yellow,
        borderBottomLeftRadius: DIMENSIONS.borderRadiusSmall,
        borderBottomRightRadius: DIMENSIONS.borderRadiusSmall
    },
    buttonTitleStyle: {
        color: COLOR.white,
        fontWeight: 'bold'
    },
    headerMain: {
        // flex: 1,
        height: DIMENSIONS.headerHeight,
        width: DIMENSIONS.screenWidth,
        backgroundColor: COLOR.yellow,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: DIMENSIONS.headerTextSize,
        textAlign: 'center'
    }
});

export default styles;