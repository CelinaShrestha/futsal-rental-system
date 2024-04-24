import Icon from "../Icon";

const SearchComponent = ({ inputValue, setInputValue, handleSearch }) => {
    return (
        <div className="relative">
            <input
                className="w-full py-[11px] px-12 font-display text-text-light-2 placeholder:font-display placeholder-text-light-2  rounded border border-primary-light-5 focus:outline-none focus:border-primary-light-2 focus:ring-1 focus:ring-primary-light-2"
                value={inputValue}
                onChange={setInputValue}
                placeholder="Start Searching..."
            />

            <span className="icon-container" onClick={handleSearch}>
                <Icon icon="magnifying-glass" size={18} />
            </span>
        </div>
    );
};

export default SearchComponent;
