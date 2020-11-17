const Layout = ({ children }) => {
  return (
    <div
      css={theme => ({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: theme.colors.black,
      })}
    >
      <header
        css={theme => ({
          paddingTop: theme.spacing.medium,
          paddingBottom: theme.spacing.medium,
          marginBottom: theme.spacing.large,
        })}
      >
        <div
          css={theme => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: theme.sizing.header,
            width: '90vw',
            alignItems: 'baseline',
          })}
        >
          <h1>RONA in 'MERICA</h1>
        </div>
      </header>
      <main
        css={theme => ({
          maxWidth: theme.sizing.body,
          width: '90vw',
          margin: '0 auto',
          flexGrow: 1,
        })}
      >
        {children}
      </main>
      <footer
        css={theme => ({
          margin: '2rem auto 0',
          maxWidth: theme.sizing.header,
          width: '90vw',
          paddingBottom: theme.spacing.medium,
          textAlign: 'center',
        })}
      >
        <p>Made with 🖤 by Cory Kelley</p>
      </footer>
    </div>
  );
};

export default Layout;
