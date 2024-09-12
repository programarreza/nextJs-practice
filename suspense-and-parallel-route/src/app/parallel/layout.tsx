import { ReactNode } from "react";

const Layout = ({
  children,
  posts,
  profile
}: {
  children: ReactNode;
  posts: ReactNode;
  profile: ReactNode;
}) => {
  return (
    <div>
      <h2>This is served inside </h2>
      {children}
      {posts}
      {profile}
    </div>
  );
};

export default Layout;
