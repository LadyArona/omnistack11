import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#f0f0f5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 24
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },
  heroTitle: {
    fontSize: 20,
    color: '#13131A',
    fontWeight: 'bold',
    lineHeight: 30
  },
  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380'
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  }
});