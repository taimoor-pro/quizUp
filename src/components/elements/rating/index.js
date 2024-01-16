import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Controller } from 'react-hook-form';

const RatingStar = ({ id, name, control, errors }) => {
    return (
        <Box className="mt-2 ms-5"
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Controller
                name={name}
                control={control}
                defaultValue={2}
                render={({ field }) => (
                    <>
                        <Rating
                            id={id}
                            {...field}
                            onChange={(event, newValue) => {
                                field.onChange(newValue);
                            }}
                        />
                        {errors[name] && <div style={{ color: "red" }}>{errors[name].message}</div>}
                    </>
                )}
            />
        </Box>
    );
}

export default RatingStar;
