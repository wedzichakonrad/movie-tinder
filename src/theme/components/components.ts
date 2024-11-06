import { MuiAppBar } from './mui-app-bar';

export const overriddenComponents = (variables: any) => ({
  MuiAppBar: {
    ...MuiAppBar(variables),
  },
});
