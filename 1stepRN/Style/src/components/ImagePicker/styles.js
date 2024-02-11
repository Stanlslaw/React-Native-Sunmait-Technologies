import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    aspectRatio: 1,
    marginTop: 24,
    alignSelf: 'center',
  },
  imageContainer: {
    aspectRatio: 1,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  cameraPicker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    width: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(204,204,204,0.8)',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
