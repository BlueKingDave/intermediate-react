import { useParams, Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const currentQuestion = parseInt(questionNumber, 10); // Convert questionNumber to a number
  const prevQuestionNumber = currentQuestion === 1 ? null : currentQuestion - 1;
  const nextQuestionNumber = currentQuestion + 1;

  return (
    <div>
      <h1>Survey 🧮</h1>
      <h2>Question {currentQuestion}</h2>

      <div>
        {/* Back Link */}
        {prevQuestionNumber && (
          <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
        )}

        {/* Next Link or Results Link */}
        {currentQuestion < 10 ? (
          <Link
            to={`/survey/${nextQuestionNumber}`}
            style={{ marginLeft: '10px' }}
          >
            Next
          </Link>
        ) : (
          <Link to="/results" style={{ marginLeft: '10px' }}>
            Results
          </Link>
        )}
      </div>
    </div>
  );
}

export default Survey;
