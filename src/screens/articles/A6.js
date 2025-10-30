import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';
const A6 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        <Header>Blood test and genetic tests</Header>
        If you do not know whether you make sickle hemoglobin, you can find out by having your blood tested. You may also have 
        a genetic test. This way, you can learn whether you carry a genes  — or have the trait — for sickle hemoglobin that you
        could pass on to a child.
        {'\n\n'}
        Genetic tests can help your doctor figure out which type of sickle cell disease you have or can help confirm a diagnosis
        if results from blood tests are not clear. Genetic testing can also tell whether you have one or two copies of the sickle 
        hemoglobin gene.
        <Header newSection={true}>Prenatal screening</Header>
        Healthcare providers can also diagnose sickle cell disease before a baby is born. This is done using either a sample of 
        amniotic fluid (the liquid in the sac surrounding a growing embryo) or a sample of tissue taken from the placenta 
        (the organ that attaches the umbilical cord to the womb).
        {'\n\n'}
        Testing before birth can be done as early as 8 to 10 weeks into the pregnancy. This testing looks for the sickle 
        hemoglobin gene rather than the abnormal hemoglobin itself. This testing cannot tell you how severe the disease symptoms will be.
        <Header newSection={true}>Newborn screening</Header>
        In newborn screening programs, healthcare providers prick the heel of the newborn and collect drops of blood on a special 
        type of paper. The hemoglobin from this blood is then tested in a lab. Newborn screening results are sent to the provider 
        who ordered the test and to your child’s healthcare provider.
        {'\n\n'}
        Providers from a special follow-up newborn screening team will contact you directly if your child has sickle cell disease. 
        Your child’s providers will then retest your child to make sure the diagnosis is correct.
        {'\n\n'}
        Newborn screening programs also find out whether your baby has the sickle cell trait and is a carrier. If this is the case, 
        counseling will be offered. Remember that when a child has sickle cell traitexternal link or sickle cell disease, their future 
        siblings or your child’s future children may be at risk.
        <Source>
        Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

export default A6

const styles = StyleSheet.create({})