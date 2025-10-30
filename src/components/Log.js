import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import CustomText from './CustomText';
import { colors } from '../util/constants/Colors';

const Log = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Icon name="calendar" type="entypo" color={colors.lochmara} size={16} />
          <CustomText fontFamily="Rubik-Medium" color="black" style={styles.date}>
            {props.date}
          </CustomText>
        </View>
        <View style={styles.timeContainer}>
          <Icon name="clock" type="entypo" color={colors.gray} size={14} />
          <CustomText fontFamily="Rubik-Regular" color="gray" style={styles.time}>
            {props.time}
          </CustomText>
        </View>
      </View>
      
      <View style={styles.content}>
        <CustomText fontFamily="Rubik-Regular" color="black" style={styles.description}>
          {props.description}
        </CustomText>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
          <Icon name="trash" type="antdesign" color={colors.tangerine} size={16} />
          <CustomText fontFamily="Rubik-Medium" color="tangerine" fontSize="small" style={styles.deleteText}>
            Delete
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Log;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 120,
  },
  date: {
    marginLeft: 6,
    fontSize: 16,
    flexShrink: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  time: {
    marginLeft: 4,
    fontSize: 14,
  },
  content: {
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
  },
  footer: {
    alignItems: 'flex-end',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.tangerine,
    shadowColor: colors.tangerine,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  deleteText: {
    marginLeft: 6,
  },
});


