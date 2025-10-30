import React from 'react';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from "../../components/Source"
import { View } from 'react-native';
export default A2 = () => {
  return (
    <>
      <CustomText fontSize={"small"}  marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        Sickle cell disease is inherited, meaning that it runs in families. People who have sickle cell anemia inherit two 
        faulty hemoglobin genes — hemoglobin S — one from each parent. Sickle cell disease can also occur when a child inherits 
        one hemoglobin S gene from one parent and another faulty hemoglobin gene, such as beta (β) thalassemia, hemoglobin C, hemoglobin
        D, or hemoglobin E, from the second parent.
        {'\n\n'}
        A person has sickle cell trait when they inherit hemoglobin S gene from one parent and a normal hemoglobin gene — 
        hemoglobin A — from the other. They are called a carrier of the hemoglobin S gene because they can pass it on when they have a child. 
        People who have sickle cell trait are generally healthy.
        <Header newSection={true}>Inheritance pattern for sickle cell disease</Header>
        In the image above, each parent has one normal hemoglobin A gene and one hemoglobin S gene, which means each of their children has:
        {'\n\n'}
        ● A 25%, or 1 in 4, chance of inheriting two normal hemoglobin A genes. This child does not have sickle cell trait or disease.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● A 50%, or 1 in 2, chance of inheriting one normal hemoglobin A gene and one hemoglobin S gene. This child has sickle cell trait.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● A 25%, or 1 in 4, chance of inheriting two hemoglobin S genes. This child has sickle cell disease.
        {'\n\n'}
        It is important to keep in mind that each time this couple has a child, the chances of that child having sickle cell disease remain the same. 
        In other words, if the first child has sickle cell disease, there is still a 25% chance that the second child will also have the disease. Both boys 
        and girls can inherit sickle cell trait, sickle cell disease, or normal hemoglobin.
        {'\n\n'}
        If a person wants to know whether they carry a sickle hemoglobin gene, a healthcare provider can order a blood test to find out.
        <Header newSection={true}>What should you do if you are a carrier or have the disease?</Header>
        People who do not know whether they carry a faulty hemoglobin gene can ask their provider for a blood test.
        {'\n\n'}
        Couples who are planning to have children and know that they are at risk of having a child with sickle cell
        disease may want to meet with a genetic counselor. A genetic counselor can answer questions about the risk 
        and explain the choices that are available.
        <Source>
          Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of 
          Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

