import React from 'react'
import { BiCheck } from 'react-icons/bi';

const Dropdown = ({toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    if(!toggle){
        return null;
    }
        return (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                    className="py-1"
                    role="menu">
                    <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer"
                        role="menuitem"
                        onClick={() => onSortByChange('petName')}
                        >
                        PetName {(sortBy === 'petName') && <BiCheck />}
                    </div>
                    <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer"
                        role="menuitem"
                        onClick={() => onSortByChange('ownerName')}
                        >
                        Owner Name {(sortBy === 'ownerName') && <BiCheck />}
                    </div>
                    <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer"
                        role="menuitem"
                        onClick={() => onSortByChange('Date')}
                        >
                        Date {(sortBy === 'Date') && <BiCheck />}
                    </div>
                    <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer border-gray-1 border-t-2"
                        role="menuitem"
                        onClick={() => onOrderByChange('asc')}
                        >
                        Asc {(orderBy === 'asc') && <BiCheck />}
                    </div>
                    <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer"
                        role="menuitem"
                        onClick={() => onOrderByChange('dsc')}
                        >
                        Desc {(orderBy === 'dsc') && <BiCheck />}
                    </div>
                </div>
            </div>
        )

}

export default Dropdown
