import { BooleanField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ItemShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="commodity" />
            <TextField source="id" />
            <TextField source="part_number" />
            <NumberField source="count" />
            <TextField source="package_type" />
            <TextField source="weight_package_unit" />
            <NumberField source="height_package_unit" />
            <NumberField source="width_package_unit" />
            <NumberField source="length_package_unit" />
            <TextField source="dimension_unit" />
            <BooleanField source="hazardous" />
            <BooleanField source="temperature_controlled" />
        </SimpleShowLayout>
    </Show>
);