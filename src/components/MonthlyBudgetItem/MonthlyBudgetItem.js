import React from 'react';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

// Styling for the table row
const StyledTableRow = styled('tr')({
  '& td': {
    padding: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  '& td:last-child button': {
    margin: '0 5px',
    padding: '8px 10px',
    borderRadius: '4px',
    backgroundColor: '#f50057',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    outline: 'none',
    '&:hover': {
      backgroundColor: '#e5346d',
    },
  },
});

const MonthlyBudgetItem = ({ budget, onEdit, onDelete }) => {
  return (
    <StyledTableRow>
      <td>{budget.item}</td>
      <td>{budget.budget}</td>
      <td>
        <button onClick={() => onEdit(budget.budget_id)}>Edit</button>
        <button onClick={() => onDelete(budget.budget_id)}>Delete</button>
      </td>
    </StyledTableRow>
  );
};

export default MonthlyBudgetItem;
