import { useParams } from "react-router-dom";


// Get path from route
function Post() {
  const params = useParams();
  return (
    <div>
      <h1>Post id {params.id}</h1>
    </div>
  );
}

export default Post;