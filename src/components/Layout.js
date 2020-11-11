const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h3>Github Issues</h3>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>
              <a href='#'>Something there</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <h2>This is the footer</h2>
      </footer>
    </div>
  );
};

export default Layout;
