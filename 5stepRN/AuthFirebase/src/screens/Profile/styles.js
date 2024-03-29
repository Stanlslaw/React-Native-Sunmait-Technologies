import {StyleSheet} from 'react-native';

import {assets} from '../../assets/assets';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 24,
  },
  navigationContainer: {
    marginTop: 72,
    flexDirection: 'column',
    rowGap: 3,
  },
  logoutButtonContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginTop: 64,
  },
  logoutButtonText: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 6,
    color: 'black',
  },
});
