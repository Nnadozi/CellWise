import { Alert, StyleSheet, Button, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../components/CustomText';
import { getDate, getTime } from '../util/functions/getTimeAndDate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';

const SYMPTOM_LOG_KEY = 'SYMPTOM_LOGS';

const SymptomLog = () => {
  const [desc, setDesc] = useState('');
  const navigation = useNavigation();

  const handleLog = async () => {
    if (!desc.trim()) {
      Alert.alert('Error', 'Please enter a description.');
      return;
    }

    const symptomData = {
      date: getDate(),
      time: getTime(),
      description: desc.trim(),
    };

    try {
      await saveSymptomLog(symptomData);
      setDesc('');
      navigation.navigate("Tracker", { newLogAdded: true })
    } catch (error) {
      Alert.alert('Error', 'Failed to save log.');
    }
  };

  const saveSymptomLog = async (log) => {
    try {
      const existingLogs = await AsyncStorage.getItem(SYMPTOM_LOG_KEY);
      const logs = existingLogs ? JSON.parse(existingLogs) : [];
      logs.push(log);
      await AsyncStorage.setItem(SYMPTOM_LOG_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error(e);
      throw new Error('Failed to save log');
    }
  };

  const handleCancel = () => {
    setDesc('');
    navigation.goBack(); 
  };

  return (
    <View style={styles.con}>
      <TextInput
       value={desc} 
       maxLength={300} 
       style = {styles.input}
       onChangeText={setDesc} 
       placeholder="Describe your symptoms..."
       placeholderTextColor={"lightgray"}
       returnKeyType='done'
       textAlignVertical='top'
       blurOnSubmit = {true}
       multiline = {true}
       autoCorrect
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={handleCancel} />
        <Button title="Create" onPress={handleLog} disabled={!desc.trim()} />
      </View>
      <Divider style = {{width:"95%", marginVertical:20 }} />
      <View style={styles.tipsContainer}>
        <CustomText fontFamily={"Rubik-SemiBold"} color = "gray" >
          Tips for Describing Sickle Cell Symptoms:
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color={"gray"}>
        • Be specific about the symptoms you are experiencing.
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color={"gray"}>
        • Note the duration and intensity of each symptom.
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color={"gray"}>
        • Describe any triggers or factors that worsen your symptoms.
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color={"gray"}>
        • Include any medications you have taken and their effects.
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color={"gray"}>
        • Mention any related symptoms, such as fatigue or fever.
        </CustomText>
      </View>
    </View>
  );
};

export default SymptomLog;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding:20
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    gap: 10,
    marginLeft: 20,
  },
  input:{
    fontFamily: 'Rubik-Regular',
    borderWidth: 1,
    borderColor:"lightgray",
    color: "gray",
    padding: 20,
    width:"95%",
    height:"20%",
    borderRadius:10,
  },
  tipsContainer:{
    alignSelf:"flex-start",
    marginHorizontal:"3%"
  }
});


