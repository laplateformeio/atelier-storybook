
export const FooterComponent = () => (
  <footer className="bg-gray-800 text-white py-8" id="footer">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Atelier Co.</h3>
          <p className="text-gray-400">Providing timeless solutions since 2020.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick as</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/auth/login" className="text-gray-400 hover:text-white">
                Log In
              </a>
            </li>
            <li>
              <a href="#footer" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">
            30 Place Jules Guesde
            <br />
            Marseille, TC 13001
            <br />
            contact@atelier.ovh
          </p>
        </div>

      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Atelier Co. All rights reserved.</p>
        <a href='/legal-terms' className="text-gray-400 underline"> Mentions Legales</a>
      </div>
    </div>
  </footer>
);
