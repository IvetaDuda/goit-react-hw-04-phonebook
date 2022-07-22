import { FilterDiv, Label, Input } from './Filter.styled';

const Filter = ({ value, onFilter }) => (
  <FilterDiv>
    <Label name="filter">Find contacts by name</Label>
    <Input type="text" name="filter" value={value} onChange={onFilter} />
  </FilterDiv>
);
export default Filter;
