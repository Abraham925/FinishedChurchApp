// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Alert, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import flowersImage from './assets/flowers.jpg';
import churchLocationimage from './assets/churchLocation.png';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

  leaveToYoutubeAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to Youtube Channel",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://rb.gy/ovuivd')} 
      ]
    );
  
  leaveToMapsAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the Maps App...",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://rb.gy/mbdldh')} 
      ]
    );

export default function VisitUsPage({navigation}) {
  return (
    
   <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.subPageBanner}
        blurRadius={8}
        source={flowersImage}  
      >
        <Text style={styles.subPageBannerText}>
          Visit Us
        </Text>
        <Ionicons name="remove-outline" size={deviceWidth/5} color="white" />

      </ImageBackground>
      <View style={styles.informationHeaderContainer}>
        <Text style={styles.informationHeaderText}>
            Sunday Service
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationContainerBorder}>
            <Text style={styles.paragraph}>      
              Every Sunday at 10 A.M. (CDT) {"\n"} {"\n"}
              Services will also be livestreamed on our <Text onPress={this.leaveToYoutubeAlert} style = {styles.hyperlink}>Youtube</Text> channel
            </Text>
        </View>
        <TouchableOpacity
        onPress={this.leaveToMapsAlert}
        >
          <Image
            style={styles.map}
            source={churchLocationimage}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.leaveToMapsAlert}
        >
          <Text style={styles.hyperlink}>
            Church Address: 200 E Home Ave, {"\n"} 
            Palatine, IL 60067
          </Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  </View>
  );
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
    height: deviceHeight/1.3,
    width: deviceWidth,
    alignItems: 'center',
    
  },
  informationContainerBorder: {
    borderRadius: deviceHeight/80,
    borderWidth: deviceWidth/50,
    borderColor:'black',
    marginBottom: deviceHeight/50
  },
  map: {
    height: deviceHeight/4,
    width: deviceWidth/1.2,
  },
  hyperlink: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#0645AD',
    color: '#0645AD',
  },
  paragraph: {
    fontSize: deviceHeight/40,
    margin: deviceHeight/80,
  },

});

