// npm install prop-types 새파일 만들고 프랍스 몇개 써야되니까 설치해야된대
// Weather.js는 state 없이 할거래

import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



// export default function Weather({temp}){
//     return (
//         <View style = {styles.container}>
//             <MaterialCommunityIcons name="weather-night" size={80} color="black" />
//             <Text>{temp}</Text>
//         </View>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     }
// });



//전체 화면을 2분할해줘야됨
//container로 감싼 상태에서 view를 두개를 만들면 됨
// export default function Weather({temp}){
//     return (
//         <View style = {styles.container}>
//             <View style={styles.halfContainer}>
//                 <MaterialCommunityIcons name="weather-night" size={96} color="black" />
//                 <Text style={styles.temp}>{temp}º</Text>
//             </View>
//            <View style={styles.halfContainer}>
//                <Text></Text>
//            </View>
//         </View>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     halfContainer: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     temp:{
//         fontSize: 45
//     }
// });




// linear gradient 써야되는데 install해야됨 expo에서 복사 expo install expo-linear-gradient
//그다음에 임포트 import { LinearGradient } from 'expo-linear-gradient';
//container밑으로 넣고 다른view들을 감싸주면 됨


// export default function Weather({temp}){
//     return (
//         <View style = {styles.container}>
//             <LinearGradient
//                 colors={["#b92b27","#1565C0","#203A43"]}
//                 style={styles.background}
//                 >
      
//                 <View style={styles.halfContainer}>
//                     <MaterialCommunityIcons name="weather-night" size={96} color="black" />
//                     <Text style={styles.temp}>{temp}º</Text>
//                 </View>
//                 <View style={styles.halfContainer}>
//                     <Text></Text>
//                 </View>
//            </LinearGradient>
//         </View>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     halfContainer: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     temp:{
//         fontSize: 45
//     }
// });




//linear gradient는 view와 비슷. 바깥쪽 view 를 대신할 수 있음
// export default function Weather({temp}){
//     return (
//         <LinearGradient
//             colors={["#b92b27","#1565C0","#203A43"]}
//             style={styles.container}
//             >
      
//             <View style={styles.halfContainer}>
//                 <MaterialCommunityIcons name="weather-night" size={96} color="white" />
//                 <Text style={styles.temp}>{temp}º</Text>
//             </View>
//             <View style={styles.halfContainer}>
//                 <Text></Text>
//             </View>
//         </LinearGradient>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     halfContainer: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     temp:{
//         fontSize: 45,
//         color: "white"
//     }
// });



// statusbar를 넣어야돼
// 근데 스테이터스바는 다시 켤때마다 지 맘대로야 잘 안돼.. 로딩 페이지에도 넣어야돼 
// 역시 로딩 페이지도 안돼 지들 맘대로 바껴 expo 에러인가 모르겄네
// export default function Weather({temp}){
//     return (
//         <LinearGradient
//             colors={["#b92b27","#1565C0","#203A43"]}
//             style={styles.container}
//             >
//             <StatusBar barStyle="light-content" />
//             <View style={styles.halfContainer}>
//                 <MaterialCommunityIcons name="weather-night" size={96} color="white" />
//                 <Text style={styles.temp}>{temp}º</Text>
//             </View>
//             <View style={styles.halfContainer}>
//                 <Text></Text>
//             </View>
//         </LinearGradient>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     halfContainer: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     temp:{
//         fontSize: 45,
//         color: "white"
//     }
// });




// 이제 큰 오브젝트를 만들어서 날씨따라 아이콘 바뀌고 색깔 바뀌는거 설정해야됨
// 이상하게 condition 넣는거만 하면 다 안되네 에러남
// 저번이랑 똑같다. 디테일하게 넣고 작동시킨다음에 그 상태에서 condition으로 바꾸면 된다 근데 다시 껐다 켜면 안됨

// const weatherOptions = {
//     Clear: {
//         iconName: "weather-sunny",
//         gradient: ["skyblue","lightgray","powderblue"],
//         title:"",
//         subtitle:""
//     }, 
//     Haze: {
//         iconName: "weather-hazy",
//         gradient: ["#E6DADA","#274046"],
//         title:"Haze",
//         subtitle:"Wow, it's little bit hazy. Be careful for driving (T^T)"
//     },
//     Thunderstorm: {
//         iconName: "weather-lightning-rainy",
//         gradient: ["#536976","#292E49","#799F0C"],
//         title:"Thunderstorm!",
//         subtitle:"Warning!! Hurry Up!! Go To Your Room and Lock All the Windows!!"
//     },
//     Drizzle: {
//         iconName: "weather-rainy",
//         gradient: ["#659999","#f4791f"],
//         title:"",
//         subtitle:""
//     }, 
//     Rain: {
//         iconName: "weather-pouring",
//         gradient: ["#7F7FD5","#86A8E7","#91EAE4"],
//         title:"",
//         subtitle:""
//     }, 
//     Snow: {
//         iconName: "weather-snowy-heavy",
//         gradient: ["#D3CCE3","#E9E4F0"],
//         title:"",
//         subtitle:""
//     },
//     Atmosphere: {
//         iconName: "weather-windy",
//         gradient: ["#659999","#f4791f"],
//         title:"",
//         subtitle:""
//     }, 
//     Clouds: {
//         iconName: "weather-cloudy",
//         gradient: ["#bdc3c7","#2c3e50"],
//         title:"Cloudy",
//         subtitle:"It's little bit cold outside, I guess you don't want to go out~"
//     }, 
//     Dust: {
//         iconName: "weather-windy",
//         gradient: ["#659999","#f4791f"],
//         title:"",
//         subtitle:""
//     },  
//     Mist: {
//         iconName: "weather-fog",
//         gradient: ["#659999","#f4791f"],
//         title:"",
//         subtitle:""
//     },
//     Smoke: {
//         iconName: "weather-fog",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Fog: {
//         iconName: "weather-fog",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Sand: {
//         iconName: "weather-windy",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Dust: {
//         iconName: "weather-windy",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Ash: {
//         iconName: "weather-windy",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Squall: {
//         iconName: "weather-tornado",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     },
//     Tornado: {
//         iconName: "weather-hurricane",
//         gradient: ["",""],
//         title:"",
//         subtitle:""
//     }
// }

// export default function Weather({temp,condition}){
//     return (
//         <LinearGradient
//             colors={weatherOptions["Clouds"].gradient}
//             style={styles.container}
//             >
//             <StatusBar barStyle="light-content" />
//             <View style={styles.halfContainer}>
//                 <MaterialCommunityIcons name={weatherOptions["Clouds"].iconName} size={96} color="white" />
//                 <Text style={styles.temp}>{temp}º</Text>
//             </View>
//             <View style={styles.halfContainer}>
//                 <Text style={styles.title}>title</Text>
//                 <Text style={styles.subtitle}>subtitle</Text>

//             </View>
//         </LinearGradient>
//     );
// }

// Weather.propTypes = {
//     temp:PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "Thunderstorm", 
//         "Drizzle", 
//         "Rain", 
//         "Snow", 
//         "Atmosphere", 
//         "Clear", 
//         "Clouds",
//         "Mist",
//         "Smoke",
//         "Haze",
//         "Dust",
//         "Fog",
//         "Sand",
//         "Dust",
//         "Ash",
//         "Squall",
//         "Tornado"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     halfContainer: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     temp:{
//         fontSize: 45,
//         color: "white"
//     },
//     title: {
//         fontSize: 40,
//         color: "white"
//     },
//     subtitle: {
//         fontSize: 30,
//         color: "white"

//     }
// });




const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ["skyblue","lightgray","powderblue"],
        title:"",
        subtitle:""
    }, 
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#E6DADA","#274046"],
        title:"Haze",
        subtitle:"Wow, it's little bit hazy. Be careful for driving (T^T)"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#536976","#292E49","#799F0C"],
        title:"Thunderstorm!",
        subtitle:"Warning!! Hurry Up!! Go To Your Room and Lock All the Windows!!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#7F7FD5","#86A8E7","#91EAE4"],
        title:"",
        subtitle:""
    }, 
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#D3CCE3","#E9E4F0"],
        title:"",
        subtitle:""
    },
    Atmosphere: {
        iconName: "weather-windy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title:"Cloudy",
        subtitle:"It's little bit cold outside, I guess you don't want to go out~"
    }, 
    Dust: {
        iconName: "weather-windy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    },  
    Mist: {
        iconName: "weather-fog",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Sand: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Ash: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Squall: {
        iconName: "weather-tornado",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["",""],
        title:"",
        subtitle:""
    }
}

export default function Weather({temp,condition}){
    return (
        <LinearGradient
            colors={weatherOptions["Thunderstorm"].gradient}
            style={styles.container}
            >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions["Thunderstorm"].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                        {/* 오브젝트 추가하는법 es6  */}
                <Text style={styles.title}>{weatherOptions["Thunderstorm"].title} </Text>
                <Text style={styles.subtitle}>{weatherOptions["Thunderstorm"].subtitle}</Text>

            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    temp:{
        fontSize: 45,
        color: "white"
    },
    title: {
        fontSize: 40,
        color: "white"
    },
    subtitle: {
        fontSize: 30,
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});