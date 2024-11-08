import { createTheme } from '@mui/material';
import { variables } from './variables/variables';
import { overriddenComponents } from './components/components';

export const theme = createTheme({
  ...variables,
  components: {
    ...overriddenComponents(variables),
  },
});
