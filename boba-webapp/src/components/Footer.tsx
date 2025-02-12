const Footer = () => {
    return (
      <footer className="bg-gray-100 text-center p-4 mt-10">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Boba Bear 🧋. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  