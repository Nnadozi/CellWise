import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';
const A7 = () => {
  return (
    <>
        <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
          Four medicines have been approved to treat sickle cell disease. In 1998, hydroxyurea was approved. Later, voxelotor, 
        L-glutamine, and crizanlizumab-tmca were approved. They treat different aspects of the disease.
        <Header newSection={true}>Medicine to prevent sickling and reduce multiple complications</Header>
        Hydroxyurea is an oral medicine that has been shown to reduce sickling and reduce or prevent several complications of 
        sickle cell disease. This was the first medication approved by the U.S. Food and Drug Administration (FDA) to treat 
        sickle cell and is still used as first-line treatment. If hydroxyurea does not control symptoms enough, the newer 
        FDA-approved drugs are typically added on top of hydroxyurea treatment for combination therapy. 
        {'\n\n'}
        ● Use in adults: Many studies of adults with hemoglobin SS or hemoglobin Sβ (sickle cell beta) thalassemia 
        showed that hydroxyurea lowered the number of episodes of pain crises and acute chest syndrome. It also improved 
        anemia and reduced the need for transfusions and hospital admissions.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Use in children: Studies in children with severe hemoglobin SS or Sβ thalassemia showed that hydroxyurea lowered 
        the number of vaso-occlusive crises and hospitalizations. A study of children between the ages of 9 and 18 months 
        who had hemoglobin SS or Sβ thalassemia also showed that hydroxyurea lowered the number of pain episodes and the 
        incidence of dactylitis (painful swelling of the hands and feet). There is no information about how safe or effective 
        hydroxyurea is in children under 9 months old.
        {'\n'}
        <View style = {{marginVertical:"2%"}}/>
        ● Pregnancy: Pregnant women should not use hydroxyurea.
        Since hydroxyurea can decrease several complications of sickle cell disease, most experts recommend daily use from 9 
        months of age and older with hemoglobin SS or Sβ(0) thalassemia to reduce the risk of painful episodes, recurrent chest 
        crises, or severe anemia. In some instances, regular use of hydroxyurea may be used as an alternative to transfusions 
        to prevent stroke in children. Whether hydroxyurea can prevent stroke in adults — or its ideal dose — is still unknown.
        {'\n\n'}
        <View style = {{marginVertical:"2%"}}/>
        Possible side effects include a lowered white blood cell count or platelet count. Rarely, hydroxyurea can worsen anemia. 
        These side effects usually go away quickly if a patient stops taking the medicine. When the patient restarts it, the 
        healthcare provider usually prescribes a lower dose.
        {'\n\n'}
        It is still unclear whether hydroxyurea can cause problems later in life in people who have sickle cell disease and 
        take the medicine for many years. Studies suggest that hydroxyurea does not put people at a higher risk of cancer and d
        oes not affect growth in children, but further studies are needed.
        <Header newSection={true}>Medicine to prevent the sickling of red blood cells</Header>
        Voxelotor treats sickle cell disease in adults and children 4 years old and older. The oral medicine prevents red blood cells 
        from forming the sickle shape and binding together. This may reduce the destruction of some red blood cells, which in turn may 
        lower the risk for anemia and may improve blood flow to your organs.
        {'\n\n'}
        Possible side effects include headache, diarrhea, abdominal pain, nausea, fatigue, and fever. Rarely, allergic reactions may occur, 
        causing rashes, hives, or mild shortness of breath. Talk to your healthcare provider about other medicines you take.
        <Header newSection={true}>Medicine to reduce vaso-occlusive and pain crises</Header>
        L-glutamine has been approved by the FDA for people 5 years old and older to lower the number of pain crises. 
        Research showed that patients taking L-glutamine had fewer hospital admissions than patients taking a placebo.
         The medicine is prescribed as a powder that is mixed into liquids or foods like applesauce or cereal.
        {'\n\n'}
        Possible side effects include nausea, fatigue, chest pain, and musculoskeletal pain. L-glutamine has not yet
         been tested in older adults.
        {'\n\n'}
        Over-the-counter pain medicine, such as acetaminophen or ibuprofen, can be used to treat mild to moderate pain. 
        Stronger or more serious pain may need to be treated in a clinic or hospital. Your provider may prescribe stronger
         medicines called opioids for severe pain.
        {'\n\n'}
        Crizanlizumab-tmca is approved for adults and children 16 years old and older who have sickle cell disease. 
        The medicine, which is given through an intravenous line in the vein, helps prevent blood cells from sticking to 
        blood vessel walls and causing blood flow blockage, inflammation, and pain crises. Possible side effects include nausea, 
        joint pain, back pain, and fever.
        <Header newSection={true}>Medicine to lower risk of infection</Header>
        Penicillin taken twice a day helps lower children's chance of having a serious infection in the bloodstream. Newborns 
        need to take liquid penicillin. Older children can take tablets. 
        {'\n\n'}
        Many healthcare providers will stop prescribing penicillin after a child has reached the age of 5. Some providers 
        prefer to continue to prescribe this antibiotic throughout a person's life, particularly if the person has hemoglobin 
        SS or hemoglobin Sβ0 thalassemia, since people who have sickle cell disease are still at risk. Those who have had surgical 
        removal of the spleen (called a splenectomy) or a past infection with pneumococcus should keep taking penicillin throughout 
        their lives.
        <Source>
        Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

export default A7

const styles = StyleSheet.create({})