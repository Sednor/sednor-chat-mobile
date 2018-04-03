const MARGIN = 10;
const BORDER_WIDTH = 1;

export const AUTH_COMPONENTS_STYLES = {
  button: {
    container: {
      width: 250,
      borderWidth: BORDER_WIDTH,
      paddingVertical: MARGIN,
      paddingHorizontal: MARGIN * 2,
      backgroundColor: '#3eb396'
    },
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  inputsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: 250,
    height: 35,
    paddingHorizontal: MARGIN,
    marginBottom: MARGIN * 2,
    borderWidth: BORDER_WIDTH
  },
  smallInput: {
    width: 120,
    height: 35,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1
  }
};
