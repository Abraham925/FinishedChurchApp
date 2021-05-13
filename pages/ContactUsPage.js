// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import contactImage from './assets/contact.jpg'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ContactUsPage({navigation}) {
  leaveToFacebookAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the Facebook App",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://www.facebook.com/PastorAustin/')} 
      ]
    ); 
  leaveToChurchWebsiteAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the CICAG Website",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://www.chicagoindianchurch.com')} 
      ]
    ); 
  leaveToYoutubeAppAlert = () =>
    Alert.alert(
      "🕊 Leaving App 🕊",
      "Going to the Youtube App",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok!", onPress: () => Linking.openURL('https://www.youtube.com/channel/UCMZ-fX1RrdbRL6RyCHCcivw')} 
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
    iconButtonsContainer = () => {
      return(
        <View style={styles.halfScreenContainer}>
          <ScrollView>
            <View style={styles.alignChildrenHorizontally}>
              <View style={styles.buttonContainer}>
                <FontAwesome.Button name="facebook" backgroundColor="#3b5998"  
                  onPress={this.leaveToFacebookAlert}>
                  <Text style={styles.iconButtonText}>
                    Visit our {"\n"} Facebook 
                  </Text>
                </FontAwesome.Button>
              </View>
              <View style={styles.buttonContainer}>
                <FontAwesome.Button name="chrome" backgroundColor="#FF7F50" 
                  onPress={this.leaveToChurchWebsiteAlert} >
                  <Text style={styles.iconButtonText}>
                    Visit our {"\n"} Website 
                  </Text>
                </FontAwesome.Button>
              </View>
            </View>

            <View style={styles.alignChildrenHorizontally}>
              <View style={styles.buttonContainer}>
                <FontAwesome.Button name="youtube" backgroundColor="#c4302b" 
                  onPress={this.leaveToYoutubeAppAlert} >
                  <Text style={styles.iconButtonText}>
                    Watch Past {"\n"} Sermons 
                  </Text>
                </FontAwesome.Button>
              </View>
              <View style={styles.buttonContainer}>
                <FontAwesome.Button name="phone" backgroundColor="#9F2B68" 
                  onPress={this.leaveToPhoneAppAlert} >
                  <Text style={styles.iconButtonText}>
                    Message {"\n"} Pastor 
                  </Text>
                </FontAwesome.Button>
              </View>
            </View>
          </ScrollView>
      </View>
      );
    };  
  return (
   <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.subPageBanner}
        blurRadius={8}
        source={contactImage}  
      >
        <Text style={styles.subPageBannerText}>
          Contact Us
        </Text>
        <Ionicons name="remove-outline" size={deviceWidth/5} color="white" />

      </ImageBackground>
      <View style={styles.informationHeaderContainer}>
        <Text style={styles.informationHeaderText}>
            Social Media
        </Text>
      </View>

      <View> 
          {this.iconButtonsContainer(this)}
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
  halfScreenContainer: {
    height: 2 * (deviceHeight/5),
    width: deviceWidth,
    backgroundColor: 'white',
  },  
  alignChildrenHorizontally: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  iconButtonText: {
    fontSize: deviceHeight/45,
    fontFamily: 'Helvetica-Bold',
    color: '#FBFAF5',
    fontWeight: '400',
    flexShrink: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    width: deviceHeight/5,
    height: deviceHeight/12,
    marginHorizontal: deviceHeight/70,
    marginVertical: deviceHeight/50,
    flexDirection:'row',
  },
});

