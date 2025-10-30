import { View, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../util/constants/PageBody'
import glossaryWords from '../util/constants/glossaryWords'
import Word from '../components/Word'

const Glossary = () => {
  const [search, setSearch] = useState('')
  const filteredWords = glossaryWords.filter(item => 
    item.word.toLowerCase().startsWith(search.toLowerCase())
  )
  return (
    <PageBody white>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholderTextColor={"darkgray"}
            placeholder="🔍 Search"
            maxLength={50}
            style={styles.input}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            {filteredWords.map(({ word, def }, index) => (
              <Word key={`${word}-${index}`} term={word} def={def} />
            ))}
              <View style={{ paddingBottom: "50%" }} />
          </ScrollView>
        </View>
      </View>
    </PageBody>
  )
}

const styles = StyleSheet.create({
  input:{
    fontFamily: 'Rubik-Regular',
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 20,
    color: "gray",
    margin: 20,
    width:"95%",
    padding:20,
    borderRadius:10,
  }
})

export default Glossary

