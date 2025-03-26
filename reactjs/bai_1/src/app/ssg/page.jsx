export default async function Blog() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return (
      <div>
        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
  }
  