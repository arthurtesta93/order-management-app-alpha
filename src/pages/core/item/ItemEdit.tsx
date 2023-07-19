import { BooleanInput, Edit, NumberInput, SimpleForm, TextField, TextInput } from 'react-admin';

export const ItemEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" disabled/>
            <TextInput source="part_number" />
            <TextInput source="commodity" />
            <NumberInput source="count" />
            <TextInput source="package_type" />
            <TextInput source="weight_package_unit" />
            <NumberInput source="height_package_unit" />
            <NumberInput source="width_package_unit" />
            <NumberInput source="length_package_unit" />
            <TextInput source="dimension_unit" />
            <BooleanInput source="hazardous" />
            <BooleanInput source="temperature_controlled" />
        </SimpleForm>
    </Edit>
);