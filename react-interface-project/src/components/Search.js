import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { BiSearch, BiCaretDown } from 'react-icons/bi'

const Search = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    const [toggleSort, setToggleSort] = useState(false);
    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                <input type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={(event) => { onQueryChange(event.target.value) }}
                    className="pl-8 rounded-md focus:ring-indigo-500 block w-full sm:text-sm border-gray-300 "
                ></input>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                        <button
                            type="button"
                            onClick={() => { setToggleSort(!toggleSort) }}
                            className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
                        >
                            Sort By <BiCaretDown className="ml-2" />
                        </button>
                        <Dropdown toggle={toggleSort}
                            sortBy={sortBy}
                            onSortByChange={mySort => onSortByChange(mySort)}
                            orderBy={orderBy}
                            onOrderByChange={myOrder => onOrderByChange(myOrder)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
