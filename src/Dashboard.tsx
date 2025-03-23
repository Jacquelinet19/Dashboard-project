import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'lastAppointment', headerName: 'Last Appointment', width: 200 },
];

const rows: GridRowsProp = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30, lastAppointment: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25, lastAppointment: '2023-02-20' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 28, lastAppointment: '2023-03-10' },
];

export default function Dashboard() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}