
import { DateField, NumberField, Show, SimpleShowLayout, TextField, UrlField } from 'react-admin';
import { Typography } from "@mui/material"
import { OrganizationName } from '../../component/OrganizationData';


//TODO create box displays for stats? recent actions?
export const FacilityShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h6">
                Organization:
            </Typography>
            <Typography> 
                <OrganizationName label=""/> 
            </Typography>
            <TextField source="name" />
            {/* <TextField source="zip_code" />     */}           
            <TextField source="street" />
            <NumberField source="street_number" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="country" />
            <DateField source="observations" label="Observations:" />
            <UrlField source="url" />
        </SimpleShowLayout>
    </Show>
);