export interface RootState {
  authentication: {
    Token: string | null;
    isLogin: boolean;
    // Other properties of the authentication slice
  };
  // Other slices of your Redux state
}