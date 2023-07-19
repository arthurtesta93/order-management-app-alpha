import { BooleanField, Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const ItemInstanceList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="part_number" />
            <TextField source="purchase_order_id" />
            <TextField source="commodity" />
            <NumberField source="count" />
            <TextField source="package_type" />
            <TextField source="weight" />
            <TextField source="special_instructions" />
            <BooleanField source="hazardous" />
            <BooleanField source="temperature_controlled" />
        </Datagrid>
    </List>
);
