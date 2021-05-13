// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import pastorImage from './assets/pastor.jpg';
import bibleImage from './assets/bible.png';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default function AboutUsPage({navigation}) {
  return (
   <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.subPageBanner}
        blurRadius={6}
        source={bibleImage}  
      >
        <Text style={styles.subPageBannerText}>
          About Us
        </Text>
        <Ionicons name="remove-outline" size={deviceWidth/5} color="white" />
        <Image
          style={styles.image}
          source={pastorImage}
                />  
      </ImageBackground>
      <View style={styles.informationHeaderContainer}>
        <Text style={styles.informationHeaderText}>
            Core Beliefs
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationContainerBorder}>
          <Text style={styles.paragraph}>
          Chicago Indian Church, being a Fellowship of Assemblies of God, believes that truth is found in <Text style={{fontWeight: "bold"}}> Jesus Christ </Text> and is communicated through the <Text style={{fontWeight: "bold"}}> Bible</Text>. {"\n"} {"\n"}
          We believe that people can discover their <Text style={{fontWeight: "bold"}}> true purpose </Text> when they accept Jesus Christ as their Lord and Savior.
          </Text>
        </View>
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
    height: deviceHeight/1.9,
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
  image: {
    height: deviceHeight/4,
    width: deviceHeight/4,
    borderWidth: deviceHeight/75,
    borderRadius: deviceHeight/4,
    borderColor: 'white',
    },
  paragraph: {
    fontSize: deviceHeight/40,
    margin: deviceHeight/80,
    flexWrap: 1,
  },

});

