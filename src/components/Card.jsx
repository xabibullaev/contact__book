const Card = ({ post, isFive }) => {
  let result = " ";
  if (isFive) {
    result = <p className="text">{post.id}</p>;
  }
  return (
    <div className="card">
      <div className="contact">
        {result}
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};
export default Card;
