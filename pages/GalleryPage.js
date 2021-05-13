// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import baptismImage from './assets/baptism.png';
import dedicationImage from './assets/dedication.png';
import kidsChristmasProgramImage from './assets/christmas.png';
import youthWorshipImage from './assets/youthWorship.png';
import picnicImage from './assets/picnic.png';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function GalleryPage({navigation}) {
   state = {
    photoArray:[
        {
            title: 'Dedication',
            photo: dedicationImage,
            date: '2021',
            id: '1',
        },
        {
            title: 'Baptism',
            photo: baptismImage,
            date: '2021',
            id: '2',
        },
        {
            title: 'Youth Worship',
            photo: youthWorshipImage,
            date: '2021',
            id: '3',
        },
        {
            title: 'Kids Christmas Program',
            photo: kidsChristmasProgramImage,
            date: '12/25/2019',
            id: '4',
        },
    ],
   }

  return (
   <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.subPageBanner}
        blurRadius={6}
        source={picnicImage}  
      >
        <Text style={styles.subPageBannerText}>
          Gallery
        </Text>
        <Ionicons name="remove-outline" size={deviceWidth/5} color="white" />

      </ImageBackground>
      <View style={styles.informationHeaderContainer}>
        <Text style={styles.informationHeaderText}>
            Pictures
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationContainerBorder}>
          <ScrollView horizontal={true}>
                {this.state.photoArray.map((img) => (
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                      style={styles.image}
                      source={img.photo}
                      />
                    </View>
                    <Text style={styles.title}>
                      {img.title}
                    </Text>
                    <Text style={styles.paragraph}>
                      Date: {img.date}
                    </Text>
                    <Text style={styles.paragraph}>
                      #{img.id} / {this.state.photoArray.length}
                    </Text>
                  </View>
                ))}
          </ScrollView>
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
    height: deviceHeight/1.4,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor:'white',
    
  },
  informationContainerBorder: {
    borderRadius: deviceHeight/80,
    borderWidth: deviceWidth/50,
    borderColor:'white',
    marginBottom: deviceHeight/50,
    backgroundColor: '#85b6e5',
    height: deviceHeight/1.8,
    width: deviceWidth
  },
  image: {
    marginTop: deviceHeight/100,
    height: deviceHeight/3,
    width: deviceWidth/1.8,
    marginHorizontal: deviceWidth/60,

  },
  title: {
    fontSize: deviceHeight/35,
    margin: deviceHeight/80,
    flexWrap: 1,
    color: '#FBFAF5',
    fontWeight: 'bold',
    textAlign: 'center',
  },  
  paragraph: {
    fontSize: deviceHeight/40,
    margin: deviceHeight/80,
    flexWrap: 1,
    color: '#FBFAF5',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

