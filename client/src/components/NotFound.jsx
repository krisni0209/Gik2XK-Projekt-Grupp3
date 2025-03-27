import { Link } from "react-router-dom";
 
function NotFound() {
  return (
	<div style={{ padding: "2rem", textAlign: "center" }}>
  	<h2>❌ 404 - Sidan hittades inte</h2>
  	<p>Den sida du letar efter finns inte.</p>
  	<Link to="/">
    	<button>🔙 Till startsidan</button>
  	</Link>
	</div>
  );
}
 
export default NotFound;
