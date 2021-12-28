const GITHUB_URL = "https://github.com/jakubjereczek/github-user-details";

const Footer = () => {
  return (
    <footer className="bg-light text-dark text-center p-1">
      created by <a href={GITHUB_URL}>jakubjereczek</a>
    </footer>
  );
};

export default Footer;
