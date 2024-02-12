import {StyleSheet} from 'react-native';

import {assets} from '../../assets/assets';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
  },
  groupTitle: {
    paddingTop: 32,
    paddingBottom: 6,
    paddingLeft: 8,
    fontSize: 18,
    color: 'grey',
  },
  groupContainer: {
    borderColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  propertyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 52,
  },
  propertyLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    minHeight: 52,
  },
});
