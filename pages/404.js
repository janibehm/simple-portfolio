import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1> Oops! </h1>
      <h3>Can not find the page</h3>
      <p>
        Go back to home page from{" "}
        <Link href="/">
          <a>here</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
