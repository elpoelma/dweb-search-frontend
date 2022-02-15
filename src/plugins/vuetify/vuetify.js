import { createVuetify } from 'vuetify';
import ipfsTheme from './theme';

export default createVuetify({
  theme: {
    dark: false,
    themes: {
      dark: ipfsTheme,
      light: ipfsTheme,
    },
  },
});
