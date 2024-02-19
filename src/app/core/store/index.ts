import { authReducer, featureName as authFeatureName } from "./auth/reducers/auth.reducers";


export const appReducers = {
  [authFeatureName]: authReducer, 
};