import React from 'react';
import CustomText from '../../components/CustomText';
import Source from '../../components/Source';
import { View } from 'react-native';

const A1 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        Sickle cell disease is a group of inherited red blood cell disorders that affect hemoglobin, the protein 
        that carries oxygen through the body. Normally, red blood cells are disc-shaped and flexible enough to move
        easily through the blood vessels. In sickle cell disease, red blood cells become crescent- or “sickle”-shaped 
        due to a genetic mutation. These sickled red blood cells do not bend or move easily and can block blood flow
        to the rest of the body.
        {'\n\n'}
        The blocked blood flow through the body can lead to serious problems, including stroke,
        eye problems, infections, and episodes of pain called pain crises.
        {'\n\n'}
        Sickle cell disease is a lifelong illness. Until recently, a bone marrow transplant was the only cure for sickle 
        cell disease. However, in December 2023, the U.S. Food and Drug Administration approved two new therapies to treat 
        the disease. One approach adds a gene to the body and the other makes changes to a gene that is already in the body. 
        NHLBI researchers are continuing to explore treatments that impact genes, but there are other types of treatments that
        can reduce symptoms and prolong life. If you have sickle cell disease, your healthcare team will work with you on a 
        treatment plan to reduce your symptoms and manage the condition. 
        {'\n\n'}
        The condition affects more than 100,000 people in the United States and 20 million people worldwide. In the United States,
        most people who have sickle cell disease are of African ancestry or identify themselves as Black:
        {'\n\n'}
        ● About 1 in 13 Black or African American babies are born with sickle cell trait.
        {'\n'} 
        <View style = {{marginVertical:"2%"}}/>
        ● About 1 in every 365 Black or African American babies are born with sickle cell disease.
        {'\n\n'}
        Many people who come from Hispanic, Southern European, Middle Eastern, or Asian Indian backgrounds also have sickle cell disease.
        {'\n\n'}
        The NHLBI leads and supports research and clinical trials to find a cure for sickle cell disease.
        <Source>
          Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
};

export default A1;
