import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { colors } from '../util/constants/Colors';
import CustomText from "../components/CustomText";
import { useNavigation } from '@react-navigation/native';

const ModulePreview = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9} 
      style={[styles.con, props.style]}
      onPress={() => navigation.navigate("ModuleNav", {
        screen: "Articles",
        params: { articleInfo: props.articleInfo }
      })} 
    >
      <ImageBackground source={props.source} style={styles.imageBackground} />
      <CustomText 
          margin={20} 
          fontFamily={"Rubik-Bold"} 
          color={"white"} 
          fontSize={"large"}
      >
        {props.label}
      </CustomText>
    </TouchableOpacity>
  );
};

export default ModulePreview;

const styles = StyleSheet.create({
  con: {
    width: "95%",
    height: 200, 
    borderRadius: 20,
    marginVertical: 10,
    alignSelf: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: colors.tangerine,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
    justifyContent: "flex-end",
  }
});
