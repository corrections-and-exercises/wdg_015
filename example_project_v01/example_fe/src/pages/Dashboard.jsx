function Dashboard({ user }) {
  return (
    <div className="text-center">
      <p>
        Welcome{" "}
        {user.firstname?.slice(0, 1).toUpperCase() + user.firstname?.slice(1)}
      </p>
    </div>
  );
}

export default Dashboard;
