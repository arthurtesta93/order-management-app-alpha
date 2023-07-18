
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const OrganizationsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="kind" />
            <NumberInput source="yearly_revenue" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);