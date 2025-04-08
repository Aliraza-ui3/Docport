import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Demo user for testing
const demoUser = {
  email: 'demo@docport.co',
  password: 'password123'
}

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      signup: async (userData) => {
        set({ isLoading: true, error: null })

        try {
          // In a real app, this would be an API call
          // For demo purposes, we'll just simulate a delay
          await new Promise(resolve => setTimeout(resolve, 1000))

          // Simulate successful signup
          set({
            user: { email: userData.email, name: userData.name || userData.email.split('@')[0] },
            isAuthenticated: true,
            isLoading: false
          })

          return true
        } catch (error) {
          set({ error: error.message, isLoading: false })
          return false
        }
      },

      login: async (credentials) => {
        set({ isLoading: true, error: null })

        try {
          // In a real app, this would be an API call
          // For demo purposes, we'll check against our demo user
          await new Promise(resolve => setTimeout(resolve, 1000))

          if (credentials.email === demoUser.email && credentials.password === demoUser.password) {
            set({
              user: { email: demoUser.email, name: demoUser.email.split('@')[0] },
              isAuthenticated: true,
              isLoading: false
            })
            return true
          } else {
            throw new Error('Invalid email or password')
          }
        } catch (error) {
          set({ error: error.message, isLoading: false })
          return false
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },

      clearError: () => {
        set({ error: null })
      }
    }),
    {
      name: 'docport-auth', // name of the item in localStorage
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated })
    }
  )
)
