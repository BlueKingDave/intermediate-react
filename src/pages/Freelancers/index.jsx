import Card from '../../components/Card';
const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Frontend developer',
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
  },
];

function Freelancers() {
  return (
    <div>
      <h1>Freelancers 👩·💻👨·💻👩·💻</h1>
      {freelancerProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
}

export default Freelancers;
