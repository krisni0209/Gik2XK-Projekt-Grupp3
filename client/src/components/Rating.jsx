function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
	i < value ? "★" : "☆"
  );
 
  return <div className="rating">{stars.join("")}</div>;
}
 
export default Rating;
