"use client";
const addUsers = async () => {
  const user = { id: 1, name: "Abhishek" };
  const res = await fetch("http://localhost:3000/api/users", {
    method: "Post",
    body: JSON.stringify(user),
  });
  console.log(res.json());
//   return res.json();
};

export default async function Page() {
  return (
    <>
      <h1>Add user</h1>
      <button onClick={addUsers}>Add</button>
    </>
  );
}
