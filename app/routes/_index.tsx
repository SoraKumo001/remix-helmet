import { Link } from "@remix-run/react";
import { RemixHead } from "remix-head";

export default function Index() {
  return (
    <div>
      <RemixHead>
        <title>Top</title>
      </RemixHead>
      <div>Top</div>
      <div style={{ display: "grid" }}>
        <Link to="test01">test01</Link>
        <Link to="test02">test02</Link>
      </div>
    </div>
  );
}
