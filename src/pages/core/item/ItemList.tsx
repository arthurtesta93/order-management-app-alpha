import { BooleanField, Datagrid, List, NumberField, TextField } from 'react-admin';

export const ItemList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="commodity" />
            <TextField source="part_number" />
            <NumberField source="count" />
            <TextField source="package_type" />
            <TextField source="weight_package_unit" />
            <BooleanField source="hazardous" />
            <BooleanField source="temperature_controlled" />
        </Datagrid>
    </List>
);
