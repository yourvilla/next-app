import Link from "next/link";
import { User } from "@/db/models/user";

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export default async function Page() {
  const { data: users } = await getUsers();
  const data = await User.find();
  console.log(users, data);
  return (
    <>
      <h1>User List</h1>
      {users.length &&
        users?.map((user) => (
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        ))}
    </>
  );
}
