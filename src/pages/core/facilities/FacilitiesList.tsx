import { Datagrid, List, NumberField, TextField } from 'react-admin';
import { OrganizationName } from '../../../component/OrganizationData';


export const FacilityList = () => (

    <List>
        <Datagrid rowClick="show">
            <OrganizationName label="Organization"/>
            <TextField source="name" />
            <TextField source="street" />
            <NumberField source="street_number" />
            <TextField source="city" />
            <TextField source="state" />
        </Datagrid>
    </List>
);