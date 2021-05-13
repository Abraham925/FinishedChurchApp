// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView, Linking, StatusBar, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import giveMeJesusImage from './assets/giveMeJesus.png';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function HomePage({navigation}) {  
  
  state = {
    uri: 'https://cdn.discordapp.com/attachments/747987452563816508/766520816443457546/b7cd731d3a49da9a734aa5900c661e98.png',  
    middleButtonArray:[
        {
            component:'VisitUsPage',
            middleButtonText: 'Getting Connected',
            uri: 'https://cdn.discordapp.com/attachments/747987452563816508/766510276853891072/Z.png',
        },
        {
            component:'GivingPage',
            middleButtonText: 'Giving',
            uri: 'https://cdn.discordapp.com/attachments/747987452563816508/766509193439608832/2Q.png',
        },
        {
            component:'AboutUsPage',
            middleButtonText: 'About Us',
            uri: 'https://cdn.discordapp.com/attachments/747987452563816508/766509579387142144/2d1c5d48e1d6f86e2e3062c28c6823a5.png',
        },
        {
            component:'ContactUsPage',
            middleButtonText: 'Contact',
            uri: 'https://cdn.discordapp.com/attachments/747987452563816508/766511097213616158/images.png',
        },
    ],
  }


    eventsContainer = () => {
      return(
        <View style={styles.eventsContainer}>
          <Text style={styles.header}>
            Events
          </Text>
          <View style={styles.eventsRow}>
            <View style={styles.eventsLeftTop}>
              <Text style={styles.eventsText}>
                Nov. 27
              </Text>
            </View>
            <View style={styles.eventsRightTop}>
              <Text style={styles.eventsText}>
                Thanksgiving Service
              </Text>
          </View>
        </View>

        <View style={styles.eventsRow}>
          <View style={styles.eventsMidLeft}>
            <Text style={styles.eventsText}>
              Dec. 25
            </Text>
          </View>
          <View style={styles.eventsMidRight}>
            <Text style={styles.eventsText}>
              Christmas Service
            </Text>
          </View>
        </View>

        <View style={styles.eventsRow}>
          <View style={styles.eventsLeftBottom}>
            <Text style={styles.eventsText}>
              Dec. 31
            </Text>
          </View>
          <View style={styles.eventsRightBottom}>
            <Text style={styles.eventsText}>
              New Year's Service
            </Text>
          </View>
        </View>
      </View>
      );
    };
    return (
      <View style={styles.container}>
        
        <View style={styles.contentContainer}>
          <ScrollView>
              <ImageBackground
                style={{width: deviceWidth, height: deviceHeight/1.2,}}
                source={giveMeJesusImage}
              >
              <Text style={styles.largeButtonText}>

              </Text>
              </ImageBackground>
              
            {/*Middle Buttons*/}
            {this.state.middleButtonArray.map((middleButton) => (
                <TouchableOpacity style={styles.largeButtonContainer}
                onPress={() => navigation.navigate(middleButton.component)}
                >
                  <ImageBackground
                    style={styles.largeButtonFormat}
                    blurRadius={3.2}
                    source={{uri: middleButton.uri}}
                  >
                    <Text style={styles.largeButtonText}>
                        {middleButton.middleButtonText}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
                ))}

            <View> 
                {this.eventsContainer(this)}
            </View>
        </ScrollView>
      

   
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'white',
  },
  contentContainer: {
    height: 11 * (deviceHeight/12),
    width: deviceWidth,
  }, 
  header: {
    fontSize: deviceHeight/28,
    fontFamily: 'Helvetica-Light',
    margin: deviceHeight/70,
    color: 'black',
  },
  largeButtonContainer: {
    height: deviceHeight/3.9,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeButtonFormat: {
    height: deviceHeight/4.5, 
    width: deviceWidth/1.1,
    borderRadius: deviceHeight/25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeButtonText: {
    fontSize: deviceHeight/25,
    fontFamily: 'Helvetica-Bold',
    color: 'white',
    alignText: 'center',
    justifyContent: 'center'
  },
  eventsRow: {
    flexDirection: 'row',
    height: deviceHeight/7.5,
    width: deviceWidth,
  },
  eventsContainer: {
    height: deviceHeight/1.8,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor: '#F2F3F4',
  },
  eventsLeftTop: {
    height: deviceHeight/7.5,
    width: deviceWidth/4.2,
    borderTopLeftRadius: deviceHeight/18,
    backgroundColor: '#80c5ff',
    justfyContent: 'center',
    alignItems: 'center',
    marginLeft: deviceHeight/12,
  },
  eventsRightTop: {
    height: deviceHeight/7.5,
    width: deviceWidth/2,
    borderTopRightRadius: deviceHeight/18,
    backgroundColor: '#45abff',
    justfyContent: 'center',
    alignItems: 'center',
  },
  eventsMidLeft: {
    height: deviceHeight/7.5,
    width: deviceWidth/4.2,
    backgroundColor: '#ffc880',
    justfyContent: 'center',
    alignItems: 'center',
    marginLeft: deviceHeight/12,
  },
  eventsMidRight: {
    height: deviceHeight/7.5,
    width: deviceWidth/2,
    backgroundColor: '#ffad42',
    justfyContent: 'center',
    alignItems: 'center',
  },
  eventsLeftBottom: {
    height: deviceHeight/7.5,
    width: deviceWidth/4.2,
    borderBottomLeftRadius: deviceHeight/18,
    backgroundColor: '#ff7575',
    justfyContent: 'center',
    alignItems: 'center',
    marginLeft: deviceHeight/12,
  },
  eventsRightBottom: {
    height: deviceHeight/7.5,
    width: deviceWidth/2,
    borderBottomRightRadius: deviceHeight/18,
    backgroundColor: '#ff4747',
    justfyContent: 'center',
    alignItems: 'center',
  },
  eventsText: {
    fontSize: deviceHeight/31,
    fontFamily: 'Helvetica-Light',
    color: 'white',
    textAlign: 'center',
    marginTop: deviceHeight/22,
  },


});

