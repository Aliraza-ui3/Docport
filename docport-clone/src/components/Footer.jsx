const Footer = () => {
  return (
    <div className="bg-light pt-4 pb-6">
      <div className="container mx-auto">
        <p className="text-gray-500 text-sm">
          ©{new Date().getFullYear()} docport all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
