import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';

const A10 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
      Sickle cell disease can affect sexual organs in ways that affect quality of life and reproduction. Menstrual cycles can sometimes exacerbate
       symptoms of sickle cell disease. You may need hormones or contraceptive options, but some options are safer than others. You should review 
       them carefully with your physician.
      {'\n\n'}
      Women with sickle cell disease are at higher risk of problems during pregnancy. If you are pregnant or planning for pregnancy, find 
      a team of healthcare providers who specialize in high-risk pregnancies and have experience with patients who have sickle cell disease.
       Meet with the team throughout your pregnancy to manage the risks.
      {'\n\n'}
      Your provider may prescribe certain vitamins and will be careful to prescribe pain medicines that are safe for you and your baby. You 
      should not use hydroxyurea during pregnancy.
      {'\n\n'}
      You may need to have one or more blood transfusions during pregnancy to treat problems, such as anemia symptoms that get worse. You may
       also experience more pain crises or be at higher risk of having acute chest syndrome. Your provider will talk to you about how to help 
       prevent these complications.
      {'\n\n'}
      Men with sickle cell disease are more likely to experience priapism, an erection lasting at least 4 hours. This can cause psychological
       distress and sexual dysfunction. It requires medical attention from a specialized healthcare provider called a urologist.
      <Source>
      Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
      </Source>
      </CustomText>
    </>
  );
}

export default A10

const styles = StyleSheet.create({})