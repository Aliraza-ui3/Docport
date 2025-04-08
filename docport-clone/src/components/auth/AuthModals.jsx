import { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const AuthModals = ({
  isLoginOpen = false,
  isSignupOpen = false,
  onCloseLogin,
  onCloseSignup
}) => {
  const [activeModal, setActiveModal] = useState(isLoginOpen ? 'login' : isSignupOpen ? 'signup' : null);

  const handleCloseLogin = () => {
    setActiveModal(null);
    if (onCloseLogin) onCloseLogin();
  };

  const handleCloseSignup = () => {
    setActiveModal(null);
    if (onCloseSignup) onCloseSignup();
  };

  const switchToSignup = () => {
    setActiveModal('signup');
  };

  const switchToLogin = () => {
    setActiveModal('login');
  };

  return (
    <>
      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={handleCloseLogin}
        onSwitchToSignup={switchToSignup}
      />

      <SignupModal
        isOpen={activeModal === 'signup'}
        onClose={handleCloseSignup}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
};

export default AuthModals;
