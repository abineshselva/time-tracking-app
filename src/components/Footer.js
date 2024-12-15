import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.074c0-5.52-4.48-10-10-10S2 6.554 2 12.074c0 5.103 3.853 9.321 8.834 9.951v-7.035H7.982v-2.916h2.852V10.81c0-2.809 1.58-4.356 4.046-4.356 1.174 0 2.391.21 2.391.21v2.607h-1.347c-1.327 0-1.732.82-1.732 1.654v1.983h2.974l-.476 2.916h-2.498v7.035C18.147 21.395 22 17.177 22 12.074z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6.003a8.46 8.46 0 01-2.415.66 4.221 4.221 0 001.848-2.318 8.37 8.37 0 01-2.637.99A4.183 4.183 0 0015.99 5c-2.31 0-4.188 1.878-4.188 4.19 0 .328.036.648.1.956a11.873 11.873 0 01-8.62-4.351 4.18 4.18 0 001.3 5.581 4.113 4.113 0 01-1.897-.52v.053c0 2.01 1.43 3.682 3.33 4.07a4.207 4.207 0 01-1.88.071c.53 1.638 2.066 2.832 3.882 2.861A8.42 8.42 0 010 20.338a11.87 11.87 0 006.458 1.897c7.745 0 11.983-6.418 11.983-11.991l-.014-.546a8.429 8.429 0 002.066-2.14z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.452 20.452h-3.694v-5.825c0-1.39-.025-3.177-1.937-3.177-1.936 0-2.232 1.508-2.232 3.057v6.945H8.832v-14.99h3.54v2.048h.048c.493-.935 1.704-1.923 3.515-1.923 3.76 0 4.451 2.47 4.451 5.682v6.184zM5.336 6.352a2.082 2.082 0 1 1-.042-4.164 2.084 2.084 0 0 1 .042 4.164zm-1.843 14.1h3.674v-14.99H3.493v14.99z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
