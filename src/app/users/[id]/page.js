const getUsers = async (id) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    return res.json();
  };
  
  export default async function Page({params}) {
    const { data: users } = await getUsers(params.id);
    console.log(users);
    return (
      <>
        <h1>User</h1>
        {users.length && users?.map((user) => <p>{user.name}</p>)}
      </>
    );
  }
  