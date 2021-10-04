import { ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const beforeNav = () => {
    return (
        <div >
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <ListItem> This is T r u s t  Education  Center</ListItem>
                <ListItem> Our Main motive is trust and honesty </ListItem>
                <ListItem> We are providing the best teachers all over the country </ListItem>
            </Box>
        </div>
    );
};

export default beforeNav;