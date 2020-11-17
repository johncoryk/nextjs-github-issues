const Layout = ({ children }) => {
  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: theme.colors.black
      })}
    >
      <header
        css={(theme) => ({
          backgroundColor: theme.colors.primary,
          paddingTop: theme.spacing.medium,
          paddingBottom: theme.spacing.medium,
          marginBottom: theme.spacing.large
        })}
      >
        <div
          css={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '0 auto',
            maxWidth: theme.sizing.header,
            width: '90vw',
            alignItems: 'baseline'
          })}
        >
          <h3>Podcast Finder</h3>
          <nav>
            <ul
              css={(theme) => ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

                li: {
                  marginLeft: theme.spacing.small
                }
              })}
            >
              <li>About</li>
              <li>Contact</li>
              <li>
                <a href="#">Something there</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main
        css={(theme) => ({
          maxWidth: theme.sizing.body,
          width: '90vw',
          margin: '0 auto',
          flexGrow: 1
        })}
      >
        {children}
      </main>
      <footer
        css={(theme) => ({
          margin: '0 auto',
          maxWidth: theme.sizing.header,
          width: '90vw',
          paddingBottom: theme.spacing.medium
        })}
      >
        <p>This is the footer content</p>
      </footer>
    </div>
  );
};

export default Layout;
