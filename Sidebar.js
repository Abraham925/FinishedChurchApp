import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Dimensions
} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Sidebar = (props) => {
  const BASE_PATH =
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c37a16b6279cd98aeccf10e34f6cf53a';
  const proileImage = 'logo.png';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c37a16b6279cd98aeccf10e34f6cf53a" }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
     
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: deviceHeight/4,
    height: deviceWidth/4,
    alignSelf: 'center',
  },

});

export default Sidebar;
