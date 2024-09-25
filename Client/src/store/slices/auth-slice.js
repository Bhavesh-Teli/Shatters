export const createAuthSlice = (set) => ({
    userInfo: undefined, // Initial state for userInfo
  
    setUserInfo: (userInfo) => set((state) => ({
      ...state,
      userInfo, // Updates userInfo in the store
    })),
  });
  