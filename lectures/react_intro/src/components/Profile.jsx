function Profile({age}) {
  const myUser = {
    fullName: 'Karl',
  };

  const display = (
    <p>
      Hello {myUser.fullName}
      {age}
    </p>
  );

  return <div>{display}</div>;
}

export default Profile;
