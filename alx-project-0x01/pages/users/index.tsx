import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

const Users: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>Users</h1>
      <p>This is the users page.</p>
      <div>
        {posts.map((post) => (
          <UserCard 
            key={post.id}
            name={post.name}
            address={post.address}
            company={post.company} id={0} username={""} email={""} phone={""} website={""}          />
        ))}
      </div>
    </div>
  );
};

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

