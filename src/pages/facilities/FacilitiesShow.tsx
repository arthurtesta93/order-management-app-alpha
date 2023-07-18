
import { DateField, NumberField, Show, SimpleShowLayout, TextField, UrlField } from 'react-admin';

export const FacilityShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="organization" />
            <TextField source="name" />
            <UrlField source="url" />
            <TextField source="zip_code" />
            <TextField source="street" />
            <NumberField source="street_number" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="country" />
            <DateField source="observations" />
        </SimpleShowLayout>
    </Show>
);