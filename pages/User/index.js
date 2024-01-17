import React from 'react'
import Navbar from '../../components/modules/Navbar'
import DataTable from '../../components/modules/DataTable'


const User = () => {
    return (
        <>
            <DataTable
                id="workList"
                MainHeading="WorkList"
                placeholder="Search Cases Here"
                tableHeading={[
                    {
                        heading: "Case Number"
                    },
                    {
                        heading: "Case Title"
                    },
                    {
                        heading: "Note"
                    },
                    {
                        heading: "Date"
                    },

                    {
                        heading: "Actions"
                    },
                    {
                        heading: "Status"
                    },
                ]}
            />
        </>
    )
}

export default User