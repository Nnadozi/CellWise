import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import PageBody from '../util/constants/PageBody';
import Log from '../components/Log';
import * as Print from 'expo-print';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSymptomLogHtml } from '../util/constants/symptomLogTemplate';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { colors } from '../util/constants/Colors';
import CustomText from '../components/CustomText';

const SYMPTOM_LOG_KEY = 'SYMPTOM_LOGS';

const SymptomTracker = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigation();
  const route = useRoute();
  const { newLogAdded } = route.params || {};

  useFocusEffect(
    React.useCallback(() => {
      const loadLogs = async () => {
        setLoading(true);
        try {
          const storedLogs = await AsyncStorage.getItem(SYMPTOM_LOG_KEY);
          if (storedLogs) {
            setLogs(JSON.parse(storedLogs));
          }
        } catch (e) {
          console.error('Failed to load logs:', e);
        }
        setLoading(false);
      };

      loadLogs();
    }, [newLogAdded])
  );

  const deleteLog = async (indexToDelete) => {
    const updatedLogs = logs.filter((_, index) => index !== indexToDelete);
    setLogs(updatedLogs);
    
    try {
      await AsyncStorage.setItem(SYMPTOM_LOG_KEY, JSON.stringify(updatedLogs));
    } catch (e) {
      console.error('Failed to save updated logs:', e);
      Alert.alert('Error', 'Failed to update logs.');
    }
  };

  const clearLogs = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem(SYMPTOM_LOG_KEY);
      setLogs([]);
    } catch (e) {
      console.error('Failed to clear logs:', e);
      Alert.alert('Error', 'Failed to clear logs.');
    }
    setLoading(false);
  };

  const confirmClearLogs = () => {
    Alert.alert(
      'Reset Symptom Tracker',
      'Are you sure you want to clear all your entries? This cannot be undone!',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: clearLogs },
      ]
    );
  };

  const print = async () => {
    const html = getSymptomLogHtml(logs);
    await Print.printAsync({ html });
  };

  const openSymptomLog = () => {
    nav.navigate('Log');
  };

  return (
    <PageBody white>
      <View style={styles.container}>
        {/* Action Buttons */}
        {logs.length > 0 && (
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={openSymptomLog}>
              <Icon name="add" type="ionicons" color={colors.white} size={20} />
              <CustomText fontFamily="Rubik-Medium" color="white" style={styles.buttonText}>
                New Entry
              </CustomText>
            </TouchableOpacity>
            
            <View style={styles.secondaryButtons}>
              <TouchableOpacity style={styles.secondaryButton} onPress={confirmClearLogs}>
                <Icon name="refresh" type="ionicons" color={colors.tangerine} size={16} />
                <CustomText fontFamily="Rubik-Medium" color="tangerine" fontSize="small">
                  Reset
                </CustomText>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.secondaryButton, logs.length < 3 && styles.disabledButton]} 
                onPress={print}
                disabled={logs.length < 3}
              >
                <Icon name="print" type="ionicons" color={logs.length < 3 ? colors.lightGray : colors.lochmara} size={16} />
                <CustomText 
                  fontFamily="Rubik-Medium" 
                  color={logs.length <3 ? colors.lightGray : colors.lochmara} 
                  fontSize="small"
                >
                  Print
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Content Area */}
        <View style={styles.content}>
          {loading ? (
            <View style={styles.centerContent}>
              <ActivityIndicator size="large" color={colors.lochmara} />
              <CustomText fontFamily="Rubik-Regular" color="gray" style={styles.loadingText}>
                Loading entries...
              </CustomText>
            </View>
          ) : logs.length === 0 ? (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <Icon name="medical" type="ionicons" color={colors.lightGray} size={60} />
              </View>
              <CustomText textAlign={"center"} fontFamily="Rubik-Medium" fontSize="medium" color="gray" style={styles.emptyTitle}>
                No entries yet
              </CustomText>
              <CustomText textAlign={"center"} fontFamily="Rubik-Regular" fontSize="small" color="lightGray" style={styles.emptySubtitle}>
                Start tracking your symptoms by creating your first entry
              </CustomText>
              <TouchableOpacity style={styles.primaryButton} onPress={openSymptomLog}>
                <Icon name="add" type="ionicons" color={colors.white} size={20} />
                <CustomText fontFamily="Rubik-Medium" color="white" style={styles.buttonText}>
                  Create First Entry
                </CustomText>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView 
              style={styles.scrollView} 
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {logs.map((obj, index) => (
                <Log 
                  key={index} 
                  description={obj.description} 
                  time={obj.time} 
                  date={obj.date} 
                  onDelete={() => {
                    Alert.alert(
                      'Delete Entry',
                      'Are you sure you want to delete this entry?',
                      [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Delete', onPress: () => deleteLog(index) },
                      ]
                    );
                  }} 
                />
              ))}
              <View style={{ paddingBottom: 100 }} />
            </ScrollView>
          )}
        </View>
      </View>
    </PageBody>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
  },
  actionButtons: {
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: colors.lochmara,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.lochmara,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginTop:10
  },
  buttonText: {
    marginLeft: 8,
  },
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    flex: 0.48,
  },
  disabledButton: {
    opacity: 0.5,
  },
  content: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    marginBottom: 24,
    opacity: 0.5
  },
  emptyTitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtitle: {
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default SymptomTracker;
