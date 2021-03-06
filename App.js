import * as React from 'react';
import { ActivityIndicator, Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import * as ScreenOrientation from 'expo-screen-orientation';

import HomeContent from './src/screen/HomeContent';
import AccountContent from './src/screen/AccountContent';




import { Badge, Icon, withBadge, ListItem } from 'react-native-elements'

const CartBadge = withBadge(5)(Icon)

const CartIcon = ({ color }) => (
  <CartBadge
    type="ionicon"
    name="ios-cart-outline"
    color={color}
    size={27}
  />
);


function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50, marginTop: 20, marginLeft: 5 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require("./images/list.png")} resizeMode="contain" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.goBack()}
            >
              <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require("./images/previous.png")} resizeMode="contain" />
              <Text>Back</Text>
            </TouchableOpacity>
          )
        }
      </View>

      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: "900" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  )
}



function HomeScreen({ navigation }) {
  return (
    < SafeAreaView >
      <CustomHeader title='Trang ch???' isHome={true} navigation={navigation} />
      <View >
        <HomeContent />
        <ActivityIndicator size="large" color="#0000ff " />
      </View>
    </SafeAreaView >
  );
}

function SettingsScreen({ navigation }) {
  return (
    < SafeAreaView >
      <CustomHeader title='Setting' isHome={true} navigation={navigation} />
      <View>
        <Text>Setting!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

function AccountScreen({ navigation }) {
  return (
    < SafeAreaView>
      <CustomHeader title='Setting' isHome={true} navigation={navigation} />
      <View >
        <AccountContent />
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}
function SearchScreen({ navigation }) {
  return (
    < SafeAreaView>
      <CustomHeader title='Setting' isHome={true} navigation={navigation} />
      <View>
        <Text>T??m ki???m</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

function HomeScreenDetail({ navigation }) {
  return (
    < SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home Detail' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Detail!</Text>
      </View>
    </SafeAreaView >
  );
}

function SettingScreenDetail({ navigation }) {
  return (
    < SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Setting Detail' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting Detail!</Text>
      </View>
    </SafeAreaView >
  );
}

function NotificationsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      <Text>ABC  </Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 6,
          left: 7,
          right: 7,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 65,
          ...style.shadow
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ focused }) => (
          <View style={style.iconMenu}>
            <Image source={require("./images/home.png")} resizeMode="contain" style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }} />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Trang ch???</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Settings" component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={style.iconMenu}>

              <CartIcon color={focused ? '#e32f45' : '#748c94'} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, marginBottom: 7 }}>Gi??? H??ng</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={style.iconMenu}>
              <Image source={require("./images/account.png")} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>T??i Kho???n</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={style.iconMenu}>
              <Image source={require("./images/search.png")} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>T??m ki???m</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  )
}


const Tab = createBottomTabNavigator();


const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();


function HomeStack() {
  return (
    <StackHome.Navigator initialRouterName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouterName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}
// https://static.enapter.com/rn/icons/material.html
function CustomDrawerContent(props) {
  const list = [
    {
      title: '????ng k??',
      icon: 'account-circle'
    },
    {
      title: '????ng nh???p',
      icon: 'assignment-ind'
    },
    {
      title: 'T??m ki???m',
      icon: 'search'
    },
    {
      title: 'L???c s???n ph???m',
      icon: 'filter-list'
    },
    {
      title: 'Li??n H???',
      icon: 'mail-outline'
    },
  ]
  return (
    <SafeAreaView style={{ marginTop: 50 }}>


      <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} />
              <ListItem.Content>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('Notifications', { xxx: 123 })}>
                  <ListItem.Title style={{ marginBottom: 20 }} >{item.title}</ListItem.Title>
                </TouchableOpacity>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>

    </SafeAreaView>
  )
}

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function App() {
  changeScreenOrientation();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 5
  }
})