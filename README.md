# remix-helmet

Sample of manipulating head content dynamically from a component in Remix.

## operation details

https://remix-helmet.vercel.app/

## Sample

### route.tsx

```tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { RemixHeadProvider, RemixHeadRoot } from "remix-head";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RemixHeadProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <RemixHeadRoot />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <Analytics />
        </body>
      </html>
    </RemixHeadProvider>
  );
}

export default function App() {
  return <Outlet />;
}
```

### routes/\_index.tsx

```tsx
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
```
