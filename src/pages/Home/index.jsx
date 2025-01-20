import './Home.css';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Its my home</p>
      {/* Dummy content to enable scrolling */}
      <div className="dummy-content">
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index}>
            This is line {index + 1} of dummy content. Keep scrolling to see
            more!
          </p>
        ))}
      </div>
    </>
  );
}

export default Home;
