
import { Datagrid, DateField, List, NumberField, TextField, UrlField } from 'react-admin';

export const OrganizationsList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="kind" />
            <NumberField source="yearly_revenue" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </Datagrid>
    </List>
);