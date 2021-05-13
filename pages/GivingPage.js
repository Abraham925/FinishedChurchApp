// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function GivingPage({navigation}) {
  leaveToSecureGiveAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the Secure Giving Website",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://app.securegive.com/chicagoindianchurch/main/donate/category')} 
      ]
    );  
  leaveToPhoneAppAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the Phone App",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('tel://8474699099')} 
      ]
    );      
    return (
   <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.subPageBanner}
        blurRadius={8}
        source={{ uri: 'https://kerlanjobe.org/wp-content/uploads/2018/04/background-home-giving04_mobile04.jpg' }}  
      >
        <Text style={styles.subPageBannerText}>
          Online Giving
        </Text>
        <Ionicons name="remove-outline" size={deviceWidth/5} color="white" />

      </ImageBackground>
      <View style={styles.informationHeaderContainer}>
        <Text style={styles.informationHeaderText}>
            Ways to Give
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationContainerBorder}>
            <Text style={styles.paragraph}>
              Donate through our SecureGive button below {"\n"} 
              Or text “CICOFFERING  *Dollar Amount* “ to {"\n"} 
              <Text style={styles.hyperlinkText} onPress={this.leaveToPhoneAppAlert}>+1 (847)-469-9099</Text>{"\n"} {"\n"} 
              <Text style={{fontWeight: "bold"}}> Your </Text> support and contributions will enable us to reach more people. {"\n"}
              <Text style={{fontWeight: "bold"}}> Your </Text> generous donation will fund our mission.
            </Text>
        </View>
        <TouchableOpacity style={styles.giveButton}
          onPress={this.leaveToSecureGiveAlert}
        >
          <Text style={styles.giveButtonText}>
            Give
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'white',
  },
  subPageBanner:{
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    height: deviceHeight/2,
  },
  subPageBannerText:{
    fontSize: deviceHeight/17,
    fontFamily: 'Helvetica-Bold',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  informationHeaderContainer: {
    height: deviceHeight/8,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  informationHeaderText:{
    fontSize: deviceHeight/22,
    fontFamily: 'Helvetica-Bold',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  informationContainer: {
    height: deviceHeight/1.5,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor:'white',
  },
  informationContainerBorder: {
    borderRadius: deviceHeight/80,
    borderWidth: deviceWidth/50,
    borderColor:'black',
    marginBottom: deviceHeight/50
  },
  giveButton: {
    margin:deviceHeight/40,
    height: deviceHeight/11,
    width: deviceWidth/2.7,
    backgroundColor:"#2c5c94",
    alignItems: 'center',
    justifyContent: 'center',
  },
  giveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: deviceHeight/25,
    fontWeight: '600',
  },
  paragraph: {
    fontSize: deviceHeight/40,
    margin: deviceHeight/80,
    flexWrap: 1,
  },
  hyperlinkText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#0645AD',
    color: '#0645AD',
  },
});

