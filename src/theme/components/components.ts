import { MuiAppBar } from './app-bar/mui-app-bar';
import { MuiGrid2 } from './grid2/mui-grid2';
import { MuiButton } from './button/mui-button';

export const overriddenComponents = (variables: any) => ({
  MuiAppBar: {
    ...MuiAppBar(variables),
  },
  MuiGrid2: {
    ...MuiGrid2(),
  },
  MuiButton: {
    ...MuiButton(),
  },
});
