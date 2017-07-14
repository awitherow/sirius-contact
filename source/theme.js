import { Dimensions } from "react-native"; 

const { height, width } = Dimensions.get('window');

export default {
    colors: {
	lightBlue: "rgb(11,157,253)",
	darkBlue: "#053a59",
    },
    metrics: {
	width,
	height,
    }
}
