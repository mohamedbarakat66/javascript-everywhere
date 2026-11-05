import React, { JSX } from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
    </footer>
  );
}

export default Footer;