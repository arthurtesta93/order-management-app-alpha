
import { DateField, NumberField, Show, SimpleShowLayout, TextField, UrlField } from 'react-admin';

export const OrganizationsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="kind" />
            <NumberField source="yearly_revenue" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <UrlField source="url" />
        </SimpleShowLayout>
    </Show>
);