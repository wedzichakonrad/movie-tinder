import { createTheme } from '@mui/material';
import { variables } from './variables/variables'; // Ensure this exports correct types
import { overriddenComponents } from './components/components';

export const theme: any = createTheme({
  ...variables,
  components: {
    ...overriddenComponents(
        createTheme({
          ...variables,
        })
    ),
  },
});