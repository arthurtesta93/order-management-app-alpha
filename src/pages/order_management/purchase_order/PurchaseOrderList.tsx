import { ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField, useRecordContext } from 'react-admin';


export const PurchaseOrderList = () => {

    return(
    <List>
        <Datagrid rowClick="edit">
            <TextField source="seller" />
            <TextField source="buyer" />
            <TextField source="purchase_order_status" />
        </Datagrid>
    </List>
    )
};