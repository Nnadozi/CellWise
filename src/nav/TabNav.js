import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/base';
import { Text, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Learn from '../screens/Learn';
import Glossary from '../screens/Glossary';
import SymptomTracker from '../screens/SymptomTracker';
import { colors } from '../util/constants/Colors';
import { fontSizes } from '../util/constants/FontSizes';

const TabNav = ({navigation}) => {
  const Tabs = createBottomTabNavigator();
  const renderIcon = (routeName, focused) => {
    const icons = {
      'Learn': { name: 'school', type: 'ionicons' },
      'Glossary': { name: 'book', type: 'entypo' },
      'Tracker': { name: 'health-and-safety', type: 'alert' },
    };

    const icon = icons[routeName];
    const color = focused ? colors.gray : colors.lightGray;

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{marginTop:10}} name={icon.name} type={icon.type} color={color} size={23} />
        <Text style={{ color, fontFamily: 'Rubik-Medium', fontSize: 10, width: "100%", textAlign: "center",marginTop:4 }}>
          {routeName}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.lochmara },
          headerTitleStyle: { fontFamily: 'Rubik-Medium', color: colors.white, fontSize: fontSizes.small },
          tabBarStyle: { borderTopColor: colors.gray },
          tabBarIcon: ({ focused }) => renderIcon(route.name, focused),
          tabBarLabel: () => null,
        })}
      >
        <Tabs.Screen name="Learn" component={Learn} options={{
          title:"Learning Modules",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon name="info" color={colors.white} size={23} style={{ marginLeft: "20%" }} />
            </TouchableOpacity>
          )
        }} 
          />
        <Tabs.Screen name="Glossary" component={Glossary} />
        <Tabs.Screen name="Tracker" component={SymptomTracker} options={{title:"Symptom Tracker"}} />
      </Tabs.Navigator>
    </>
  );
};

export default TabNav;
