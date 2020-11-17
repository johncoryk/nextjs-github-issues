const Card = ({ data }) => {
  return (
    <article
      css={theme => ({
        border: '2px solid black',
        padding: theme.spacing.medium,
        margin: theme.spacing.small,
        borderRadius: theme.spacing.small,
      })}
    >
      <div
        css={theme => ({
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        })}
      >
        <h1
          css={{
            fontSize: '4rem',
          }}
        >
          {data.state}
        </h1>
        <div css={{}}>
          <h3>Total Deaths: {data.death}</h3>
          <h3>Currently Hospitalized: {data.hospitalizedCurrently}</h3>
          <h3>Total Positive Tests: {data.positive}</h3>

          <h3>
            Total Recovered: {data.recovered !== null ? data.recovered : 'N/A'}
          </h3>
        </div>
      </div>
      <i>
        All data since: <strong>{data.lastUpdateEt.slice(0, 10)}</strong>
      </i>
    </article>
  );
};

export default Card;
