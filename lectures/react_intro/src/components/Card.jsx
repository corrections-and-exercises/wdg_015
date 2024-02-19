import Profile from './Profile.jsx';

function Card({user, index}) {
  return (
    <div>
      <div>
        Hello {user} {index}
      </div>
      <Profile age={22} />
    </div>
  );
}

export default Card;
