import { ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import PageBody from "../util/constants/PageBody"
import ModulePreview from "../components/ModulePreview"
import { OverviewInfo ,SymptomsInfo ,TreatmentInfo ,DiagnosisInfo ,LivingInfo  } from '../util/constants/ModuleInfo'

const Learn = () => {

  return (
    <PageBody >
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}>
     
          <ModulePreview source = {require("../assets/images/overview.png")} label = "Overview" style = {{marginTop:20}} time = {"15 min"} bg = "bg1.png"
           articleInfo = {OverviewInfo}/>
          <ModulePreview source = {require("../assets/images/symptoms.png")} label = "Symptoms"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {SymptomsInfo}/>
          <ModulePreview source = {require("../assets/images/diagnosis.png")} label = "Diagnosis"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {DiagnosisInfo}/>
          <ModulePreview source = {require("../assets/images/treatment.png")} label = "Treatment"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {TreatmentInfo}/>
          <ModulePreview source = {require("../assets/images/living.png")} label = "Living With Sickle Cell"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {LivingInfo}/>
      
      </ScrollView>
    </PageBody>
  )
}

export default Learn

const styles = StyleSheet.create({})