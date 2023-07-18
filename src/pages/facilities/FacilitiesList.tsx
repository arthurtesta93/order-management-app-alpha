import { Datagrid, List, NumberField, TextField, useRecordContext } from 'react-admin';

const OrganizationName = () => {
    const resource = useRecordContext();
    console.log("facilities", resource);
    return <>{resource.organization.name}</>;

}


export const FacilityList = () => (
    
    <List>
        <Datagrid rowClick="edit">
            <OrganizationName />
            <TextField source="name" />
            <TextField source="street" />
            <NumberField source="street_number" />
            <TextField source="city" />
            <TextField source="state" />
        </Datagrid>
    </List>
);