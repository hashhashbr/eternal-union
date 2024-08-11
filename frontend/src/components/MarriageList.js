import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const MarriageList = ({ contract }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await contract.getAllRecords();
        setRecords(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecords();
  }, [contract]);

  return (
    <>
      <Typography variant="h2">Marriage Records</Typography>
      <List>
        {records.length > 0 ? (
          records.map((record, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${record.groomName} & ${record.brideName}`}
                secondary={`${record.weddingDate} - ${record.congratulationsMessage}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">No records found</Typography>
        )}
      </List>
    </>
  );
};

export default MarriageList;
