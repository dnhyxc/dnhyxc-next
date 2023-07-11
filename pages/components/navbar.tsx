import Link from "next/link";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const styles = {
    display: "flex",
  };

  const aStyles = {
    marginRight: "10px",
  };

  return (
    <div style={styles}>
      <Link href="/" style={aStyles}>
        Home
      </Link>
      <Link href="/about" style={aStyles}>
        About
      </Link>
      <Link href="/post/901" style={aStyles}>
        Post 901
      </Link>
      <Link href="/post/902">Post 902</Link>
    </div>
  );
};

export default Navbar;
