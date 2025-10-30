import { StyleSheet,View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';

const A8 = () => {
  return (
    <>
      <CustomText fontSize={"small"} marginTop={30}marginBottom={30} width="90%" fontFamily="Rubik-Regular" color="gray">
        <Header>Transfusions</Header>
        Your healthcare provider may recommend a blood transfusion to treat and prevent certain sickle cell disease complications. Blood 
        transfusion is the process of transferring donated blood to your body. Red blood cell transfusions increase the number of red blood 
        cells and provide normal red blood cells that are more flexible than red blood cells with sickled hemoglobin.
        {'\n\n'}
        ● Acute transfusions treat complications that cause severe anemia. Providers may also use transfusions when a patient has an acute stroke, 
        in many cases of acute chest crises, and in multi-organ failure. 
        {"\n"}
        <View style = {{marginVertical:"2%"}}/>
        ● Intermittent transfusions may be recommended to help relieve other symptoms as needed. A patient who has sickle cell disease usually 
        receives blood transfusions before surgery to prevent complications.
        {"\n"}
        <View style = {{marginVertical:"2%"}}/>
        ● Regular or ongoing blood transfusions may help lower the chances of another stroke in people who have had an acute stroke.
        {'\n\n'}
        Healthcare providers also recommend blood transfusions for children who have abnormal transcranial Doppler ultrasound results because transfusions can 
        lower the chance of having a first stroke. Some healthcare providers use this approach to treat complications that do not improve with hydroxyurea.
         Providers may also use transfusions in people who have too many side effects from hydroxyurea. 
        {'\n\n'}
        Possible complications include  alloimmunization , which occurs when the patient’s immune system recognizes the donated blood as a foreign invader and
         attacks it. Infection and iron overload can also occur.
        <Header newSection={true}>Blood and bone marrow transplant</Header>
        Until recently, a bone marrow transplant was the only cure for sickle cell disease. However, in December 2023, the U.S. Food and Drug Administration (FDA) 
        approved two new genetic therapiesexternal link to treat the disease. Even so, a bone marrow transplant is still a curative option, but it is not for everyone. 
        To be successful, transplants require a genetically well-matched donor, usually a family member.
        {'\n\n'}
        Currently, most transplants are performed in children who have had complications, such as strokes, acute chest crises, and recurring pain crises. Blood and 
        bone marrow transplants are riskier in adults.
        {'\n\n'}
        Several medical centers are looking into new ways to help more people who have sickle cell disease get a transplant. These ways include blood and bone 
        marrow transplant techniques in children and adults who do not have a matched donor in the family or who are older than most recipients.
        {'\n\n'}
        Blood and bone marrow transplants are successful in about 85% of children when the donor is related and human leukocyte antigen-matched. Even with this
         high success rate, transplants still have risks. Complications can include serious infections, seizures, and other clinical problems, such as a risk of 
         leukemia after gene therapy, or a transplant rejection. 
        {'\n\n'}
        About 5% of people who have received such transplants have died. Sometimes transplanted cells attack the recipient’s organs. This is called 
        graft-versus-host disease. The healthcare provider will prescribe medicine to prevent many of the complications, but they can still happen. Because 
        transplantation can affect future fertility, you may consider fertility preservation options before the transplant.
        <Header newSection={true}>Genetic therapy treatments</Header>
        Genetic therapies aim to treat or cure conditions by adding new DNA or changing existing DNA. In December 2023, the U.S. Food and Drug Administration 
        approved two new therapiesexternal link to treat sickle cell disease. One therapy adds a gene to the body and the other makes changes to a gene that is
         already in the body. Researchers at the NHLBI are exploring other types of  genetic therapies that may help provide new treatments or a cure for sickle cell disease.
        {'\n\n'}
        Genetic therapy involves either restoring a faulty or missing gene or adding a new gene that improves the way the cell works. Researchers take blood or
         bone marrow from a patient and modify their stem cells in a laboratory using genetic therapies.
        {'\n\n'}
        Genetic therapies that modify a person’s own hematopoietic stem cells may provide a cure for people who have sickle cell disease and do not have a well
        matched donor. After medications are administered to make space in the bone marrow, modified stem cells can be injected into the blood; the cells then travel 
        in the bloodstream to the marrow spaces inside the bones. Once inside the bone marrow, the cells can produce healthy red blood cells that do not sickle.
        <Source>
        Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

export default A8

const styles = StyleSheet.create({})