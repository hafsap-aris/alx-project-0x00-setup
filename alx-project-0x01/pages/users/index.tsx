import Header from "@/components/layout/Header";

const Users = () => {
  return (
    <div>
            <Header />

      <h1>Users</h1>
      <p>This is the users page.</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}



export default Users;

