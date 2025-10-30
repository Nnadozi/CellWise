import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';
const A4 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        Sickle cell disease is an  inherited  disease, which means you are born with it. However, most newborns do not have any problems 
        from the disease until they are about 5 or 6 months old.
        {'\n\n'}
        The symptoms of sickle cell disease can be different for each person and may change over time. How the disease affects your body 
        over time will determine what kind of symptoms you may have. 
        <Header newSection={true}>Early symptoms</Header>
        ● A yellowish color of the skin (jaundice) or whites of the eyes (icterus) that appears when a large number of red cells undergo hemolysis
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Extreme tiredness or fussiness from anemia, which occurs when your body is not getting enough oxygen because there are not as many healthy red blood cells
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Painful swelling of the hands and feet, known as dactylitis
        <Header newSection={true}>Know when to seek emergency medical care</Header>
        Sickle cell disease can lead to serious and life-threatening health problems. If you think that you or someone else is having any of the following symptoms or complications, 
        {'\n\n'}
        ● Severe anemia: Symptoms include extreme tiredness (fatigue), shortness of breath, dizziness, or irregular heartbeat. Splenic sequestration crisis or an aplastic crisis can 
        cause severe anemia symptoms. These conditions can be life-threatening.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Fever: People with a fever of more than 101.3 degrees Fahrenheit, or 38.5 degrees Celsius, should seek attention from a healthcare provider and treatment with antibiotics 
        right away. Some people will need to be hospitalized.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Acute chest syndrome: Symptoms include chest pain, coughing, fever, and shortness of breath. You will need to be admitted to the hospital, where you may receive 
        antibiotics, oxygen therapy, or a blood transfusion.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Stroke: Warning signs include sudden weakness, numbness on one side of the body, confusion, trouble speaking, seeing, or walking.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Priapism: An erection that lasts for 4 hours or more. You will need to go to the hospital to see a hematologist (a doctor who specializes in blood conditions 
        and diseases) and a urologist (a doctor who specializes in treating conditions of the male reproductive and urinary systems).
        <Source>
        Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

export default A4

const styles = StyleSheet.create({})