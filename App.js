// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/


import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './pages/HomePage';
import GivingPage from './pages/GivingPage';
import VisitUsPage from './pages/VisitUsPage';
import GalleryPage from './pages/GalleryPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';



// Import Custom Sidebar
import Sidebar from './Sidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function homePageStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
          },
          headerTintColor: '#FBFAF5', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function visitUsPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="VisitUsPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
        },
        headerTintColor: '#FBFAF5', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="VisitUsPage"
        component={VisitUsPage}
        options={{
          title: 'Visit Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function givingPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="GivingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
        },
        headerTintColor: '#FBFAF5', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="GivingPage"
        component={GivingPage}
        options={{
          title: 'Giving', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function galleryPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Gallery"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
        },
        headerTintColor: '#FBFAF5', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Gallery"
        component={GalleryPage}
        options={{
          title: 'Gallery', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function contactUsPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
        },
        headerTintColor: '#FBFAF5', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ContactUs"
        component={ContactUsPage}
        options={{
          title: 'Contact Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function aboutUsPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AboutUs"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
           backgroundColor: '#85b6e5', //Set Header color
        },
        headerTintColor: '#FBFAF5', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="About Us"
        component={AboutUsPage}
        options={{
          title: 'About Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#2c5c94',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen
          name="HomePage"
          options={{ drawerLabel: 'Home' }}
          component={homePageStack}
        />
        <Drawer.Screen
          name="VisitUsPage"
          options={{ drawerLabel: 'Visit Us' }}
          component={visitUsPageStack}
        />
        <Drawer.Screen
          name="GivingPage"
          options={{ drawerLabel: 'Giving' }}
          component={givingPageStack}
        />
        <Drawer.Screen
          name="GalleryPage"
          options={{ drawerLabel: 'Gallery' }}
          component={galleryPageStack}
        />
        <Drawer.Screen
          name="ContactUsPage"
          options={{ drawerLabel: 'Contact Us' }}
          component={contactUsPageStack}
        />
        <Drawer.Screen
          name="AboutUsPage"
          options={{ drawerLabel: 'About Us' }}
          component={aboutUsPageStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
