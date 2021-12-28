const Searcher = () => {
  return (
    <form className="py-5">
      <div className="form-group">
        <label htmlFor="searchInput">Github user account name</label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          aria-describedby="searchHelp"
          placeholder="Enter the user account name"
        ></input>
        <small id="searchHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </form>
  );
};

export default Searcher;
