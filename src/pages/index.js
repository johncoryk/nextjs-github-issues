import Card from '../components/Card';

const Home = ({ states }) => {
  return (
    <div>
      {states.map(state => (
        <Card key={state.state} data={state} />
      ))}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await fetch(
    'https://api.covidtracking.com/v1/states/current.json'
  ).then(data => data.json());

  const states = data.filter(state => state.state !== 'AS');

  return {
    props: {
      states,
    },
  };
}
