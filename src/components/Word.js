import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../util/constants/Colors'
import CustomText from './CustomText'
import { Icon } from '@rneui/base'

const Word = (props) => {
    const[visible, setVisible] = useState(false);
  return (
    <>
    <View style = {styles.con}>
        <CustomText color={"white"} fontFamily={"Rubik-SemiBold"} fontSize={"medium"}>
            {props.term}
        </CustomText>
        <View style = {[styles.iconCon, {borderColor:colors.tangerine}]}>
            <Icon size={30}  name='open' type="ionicon" color= {colors.tangerine} onPress={ () => setVisible(!visible)}/>
        </View>
    </View>
    <Modal  animationType='fade' transparent visible={visible} onRequestClose={() => { setVisible(!visible) }}>
        <View style = {styles.modalContainer}>
            <View style = {styles.modalContent}>
                <Icon containerStyle={{alignSelf:"flex-end"}} name='close' size={25} onPress={() => setVisible(!visible)}  />
                <CustomText fontFamily={"Rubik-SemiBold"} fontSize={"medium"} >
                    Term: ‎ 
                    <CustomText fontFamily={"Rubik-Regular"}>
                        {props.term}
                    </CustomText>
                </CustomText>
                <View style = {{marginVertical:5}}></View>
                <CustomText fontFamily={"Rubik-SemiBold"} fontSize={"medium"}>
                    Definition: ‎ 
                     <CustomText fontFamily={"Rubik-Regular"}>
                        {props.def}
                    </CustomText>
                </CustomText>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default Word

const styles = StyleSheet.create({
    con:{
        width:"95%",
        borderRadius:15,
        marginVertical:7.5,
        backgroundColor:colors.tangerine,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical:25,
        paddingLeft:25,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        height:70,
    },
    iconCon:{
        height:70,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:10,
        borderWidth:2,
    },
    modalContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"rgba(0,0,0,0.25)"
    },
    modalContent:{
        backgroundColor:"white",
        width:"90%",
        alignItems: 'flex-start',
        justifyContent:"center",
        padding:15,
        borderRadius:20,
    },
})