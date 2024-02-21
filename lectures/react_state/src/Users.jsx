function Users({userData}) {
    return (
        <div>
            <h2>UserList</h2>
            {userData.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Users;
