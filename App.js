import { StatusBar } from "expo-status-bar";
import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";



// export default function App() {
//   return <Loading />;
// }

// export default class extends React.Component {
//   getLocation = async() => {
//     const location = await Location.getCurrentPositionAsync();
//     console.log(location);
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     return <Loading />;
//   }
// }

// export default class extends React.Component {
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const location = await Location.getCurrentPositionAsync();
//       console.log(location);
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     return <Loading />;
//   }
// }


// export default class extends React.Component {
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords} = await Location.getCurrentPositionAsync();
//       console.log(coords.latitude, coords.longitude);
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     return <Loading />;
//   }
// }


// export default class extends React.Component {
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     return <Loading />;
//   }
// }


// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading} = this.state;
//     return isLoading ? <Loading /> : null;
//   }
// }



// import axios from "axios";
// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getWeather = async(latitude, longitude) => {

//   }
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading} = this.state;
//     return isLoading ? <Loading /> : null;
//   }
// }





// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getWeather = async(latitude, longitude) => {
//     const { data } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//       );
//       console.log(data);
//   };
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   }
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading} = this.state;
//     return isLoading ? <Loading /> : null;
//   }
// }




// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };
//   프로젝트마다 axios설치 해야되나봐 다시 설치하니까 됐어
//   https://openweathermap.org/current#data 온도 섭씨로 바꿔야돼
//   새파일 Weather 만들어야돼
//   getWeather = async(latitude, longitude) => {
//     const { data } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//       );
//       console.log(data);
//   };
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading} = this.state;
//     return isLoading ? <Loading /> : null;
//   }
// }





// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getWeather = async(latitude, longitude) => {
//     const { data } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//       );
//       console.log(data);
//       this.setState({
//         isLoading:false,
//         temp: data.main.temp
//       })
//   };
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading, temp} = this.state;
//     return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
//   }
// } 여기까지 작동잘됨



//이제 날씨 사이트 가서 list of condition codes 아이콘 갖고 오는 작업
//weather컴포넌트 가서 proptypes에 condition 추가하고 thunderstorm 같이 날씨 이름 추가
//condition name 넣어줘야돼
// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getWeather = async(latitude, longitude) => {
//     const { data } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//       );
//       console.log(data);
//       this.setState({
//         isLoading:false,
//         condition: "Clear",
//         temp: data.main.temp
//       })
//   };
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading, condition, temp} = this.state;
//     return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
//   }
// }



// 위까지 하면 컨디션 에러 메세지 없어진다고 하는데 나는 계속 있음. 그리고 저렇게 하면 좋은게 아니래. 다시 수정하래.
// 날씨 받은 데이터 중 weather-main 배열로 된거 그거 네임을 받아와야된대
// getWeather 안에 setState 위에 console.log(data); 이거 있으면 에러남

// const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

// export default class extends React.Component {
//   state = {
//     isLoading: true
//   };

//   getWeather = async(latitude, longitude) => {
//     const { 
//       data:{
//         main:{temp},
//         weather
//       } 
//     } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//       );

//       this.setState({
//         isLoading:false,
//         condition: weather[0].main,
//         temp
//       })
//   };
//   getLocation = async() => {
//     try {
//       const response = await Location.requestPermissionsAsync();
//       console.log(response);
//       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
//       console.log(latitude, longitude);
//       this.getWeather(latitude, longitude);
//       this.setState({
//         isLoading: false
//       });
//     } catch(error) {
//       Alert.alert("Can't find you.","I'm so sorry.");
//     }
//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoading, condition, temp} = this.state;
//     return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
//   }
// }




//Weather.js로 가서 엑스포 아이콘 임포트하기 import { Ionicons } from '@expo/vector-icons';
// Ionicons 에 다른 패밀리 이름 쓰기 material community icons 같은거로. 디렉토리 가면 여러종류 있음

const API_KEY = "49db396b1ade7105ecc31c3af8522dbf";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data:{
        main:{temp},
        weather
      } 
    } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      this.setState({
        isLoading:false,
        condition: weather[0].main,
        temp
      })
  };
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      this.setState({
        isLoading: false
      });
    } catch(error) {
      Alert.alert("Can't find you.","I'm so sorry.");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, condition, temp} = this.state;
    return isLoading ? (<Loading />) : (<Weather temp={Math.round(temp)} condition={condition}/>);
  }
}

