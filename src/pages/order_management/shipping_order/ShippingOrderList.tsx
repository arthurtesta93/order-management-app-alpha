import { Datagrid, DateField, List, TextField, UrlField } from 'react-admin';

export const ShippingOrderList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="mode" />
            <DateField source="pickup_date" />
            <DateField source="delivery_date" />
            <TextField source="reference" />
            <TextField source="ship_from" />
            <TextField source="ship_to" />
            <TextField source="shipping_order_status" />
        </Datagrid>
    </List>
);