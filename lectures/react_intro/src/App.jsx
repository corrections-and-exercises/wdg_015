import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Form from './components/Form.jsx';

function App() {
  const users = ['karl', 'maria', 'hannah', 'tom'];
  return (
    <>
      <h1>React Intro</h1>
      <Navbar />
      {users.map((user, index) => (
        <Card key={user} user={user} index={index} />
      ))}

      <Form />
    </>
  );
}

export default App;
