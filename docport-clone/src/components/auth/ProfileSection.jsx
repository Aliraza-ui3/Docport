import { useAuthStore } from '../../store/authStore';
import ProtectedRoute from './ProtectedRoute';

const ProfileSection = () => {
  const { user } = useAuthStore();

  return (
    <ProtectedRoute>
      <section className="py-10 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{user?.name || 'User'}</h2>
                <p className="text-gray-600 mb-4">{user?.email}</p>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-lg font-semibold mb-3">Account Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Account Type</p>
                      <p className="font-medium">Standard</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm">Login from new device</p>
                      <p className="text-xs text-gray-500">Today, {new Date().toLocaleTimeString()}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm">Account created</p>
                      <p className="text-xs text-gray-500">Today, {new Date().toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="btn-primary">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default ProfileSection;
