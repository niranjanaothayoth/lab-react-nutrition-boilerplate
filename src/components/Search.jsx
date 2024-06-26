import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        className="input search-bar" 
        placeholder="Search for food" 
        onChange={handleSearch} 
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
