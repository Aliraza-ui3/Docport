import { useAuthStore } from '../../store/authStore';

const ProtectedRoute = ({ children, fallback }) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  // This component can be expanded later with navigation logic
  // For now it just conditionally renders based on auth state

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="mb-6">You need to be logged in to view this page.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
