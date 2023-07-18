
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const FacilityEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="organization" />
            <TextInput source="name" />
            <TextInput source="url" />
            <TextInput source="zip_code" />
            <TextInput source="street" />
            <NumberInput source="street_number" />
            <TextInput source="city" />
            <TextInput source="state" />
            <TextInput source="country" />
            <DateInput source="observations" />
        </SimpleForm>
    </Edit>
);