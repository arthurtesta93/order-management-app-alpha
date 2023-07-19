
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, SelectInput } from 'react-admin';
import { OrganizationKindChoices  } from './utils';

export const OrganizationsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <SelectInput source="kind" choices={OrganizationKindChoices}/>
            <NumberInput source="yearly_revenue" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);