import React from 'react';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';

export default A3 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        <Header>What is sickle cell trait?</Header>
        Sickle cell trait occurs when a person carries one copy of the sickle cell gene passed down from one parent 
        along with a normal hemoglobin gene from the other parent.
        {'\n\n'}
        In most cases, people living with sickle cell trait experience no symptoms and lead normal lives. Because 
        some people with sickle cell trait have complications from the condition, scientists are working to better 
        understand when and how sickle cell trait might affect a person’s health. Over 2 million people in the United 
        States live with sickle cell trait.
        {'\n\n'}
        Sickle cell trait is different from sickle cell disease.
        <Header newSection={true}>The difference between sickle cell trait and sickle cell disease</Header>
        People with sickle cell trait have only one copy of the altered hemoglobin gene and usually do not have any 
        symptoms related to the disease. In contrast, people with sickle cell disease have two copies of the altered
        hemoglobin gene.
        {'\n\n'}
        With two copies of the altered gene, red blood cells break down quickly and lead to long-lasting, severe anemia, 
        or low hemoglobin levels. Red blood cells lose their normal shape and form a “C” or sickle shape that gives the 
        disease its name.
        {'\n\n'}
        Without treatment, a person with sickle cell disease can develop frequent bouts of pain and may have life-threatening
        complications, including damage to organs such as brain, bones, lungs, kidneys, liver, and heart.
        {'\n\n'}
        The disease is most common in people of African, Middle Eastern, Mediterranean, Central and South American, and Asian 
        Indian origin or descent.
        <Header newSection={true}>What it means if someone has sickle cell trait</Header>
        Most people who have sickle cell trait will never experience any medical complications. However, in rare instances, 
        some people who have sickle cell trait can experience medical complications when performing intense physical activity. 
        For these people, the risk of experiencing symptoms is higher when they are in situations where their body needs more 
        oxygen than usual, for example, when they engage in high intensity physical activity or are active at higher elevations 
        such as mountains or unpressurized airplanes. Persons with sickle cell trait occasionally experience damage to their kidneys 
        from sickling in sections of the kidney.
        {'\n\n'}
        People with sickle cell trait should be aware of their condition because they can pass the gene onto their children. If both 
        parents have sickle cell trait, there is a greater chance that one or more of their children will be born with sickle cell disease.
        <Source>
          Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of 
          Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

