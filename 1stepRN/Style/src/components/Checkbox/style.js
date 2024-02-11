import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
  errors: {
    paddingTop: 4,
    paddingLeft: 16,
    fontSize: 12,
    color: 'red',
  },
});
