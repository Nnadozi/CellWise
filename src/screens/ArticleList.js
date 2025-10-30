import { StyleSheet,  TouchableOpacity, View } from 'react-native';
import React from 'react';
import PageBody from '../util/constants/PageBody';
import { colors } from '../util/constants/Colors';
import CustomText from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';

const ArticleList = ({ route }) => {
  
  const { articleInfo } = route.params;
  const navigation = useNavigation()

  return (
    <PageBody white>
      <View style = {styles.titleCon}>
      {
          articleInfo.titles.map((title,index) =>
            <TouchableOpacity
             onPress={() => navigation.navigate("Article",{articleTitle:title})}
             style = {{padding:15, alignSelf:"flex-start",borderTopWidth:1,width:"100%",borderColor:colors.lightGray}}>
              <CustomText alignSelf={"flex-start"} color = {"gray"} fontFamily={"Rubik-Regular"}key={index}>
                {title}
              </CustomText>
            </TouchableOpacity>
        )
      }
      </View>
    </PageBody>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  titleCon:{
    width:'100%',
    marginHorizontal:"10%",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:"0%",
    borderBottomWidth:1,
    borderBottomColor:colors.lightGray
  }
});
