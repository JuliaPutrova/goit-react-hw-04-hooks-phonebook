import React from 'react';
import { FilteredName, FilteredInput } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ value, filteredValue }) {
  return (
    <>
      <form>
        <FilteredName>
          {' '}
          Find contacts by name
          <FilteredInput
            type="text"
            name="filter"
            value={value}
            onChange={filteredValue}
          />
        </FilteredName>
      </form>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filteredValue: PropTypes.func.isRequired,
};

export default Filter;
