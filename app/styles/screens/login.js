const MARGIN = 10;
const BORDER_WIDTH = 1;

export const LOGIN_SCREEN_STYLES = {
  wrapper: {
    flex: 1
  },
  loginContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    marginBottom: MARGIN * 2
  },
  toggleButtons: {
    container: {
      paddingVertical: MARGIN * 1.5,
      paddingHorizontal: 39,
      borderWidth: BORDER_WIDTH,
      borderColor: 'black'
    }
  },
  externalButtonsContainer: {
    flex: 1
  },
  externalButtons: {
    container: {
      width: 250,
      borderWidth: BORDER_WIDTH,
      paddingVertical: MARGIN,
      paddingHorizontal: MARGIN * 2,
      marginBottom: MARGIN * 1.5,
      backgroundColor: 'lightgrey'
    },
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  contentHeader: {
    marginVertical: MARGIN,
    fontSize: 24
  },
  titleContainer: {
    width: '100%',
    paddingVertical: MARGIN,
    paddingHorizontal: MARGIN * 3,
    backgroundColor: '#3eb396'
  },
  title: {
    fontSize: 26,
    color: '#fff'
  },
  footerContainer: {
    width: '100%',
    padding: MARGIN / 2,
    textAlign: 'center',
    borderTopWidth: BORDER_WIDTH,
    borderTopColor: 'black'
  },
  separator: {
    marginVertical: MARGIN
  }
};
