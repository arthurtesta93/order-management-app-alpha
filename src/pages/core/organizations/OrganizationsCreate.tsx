import { Create, NumberInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { OrganizationKindChoices } from "./utils";


export const OrganizationsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <SelectInput source="kind" choices={OrganizationKindChoices}/>
            <NumberInput source="yearly_revenue" />
        </SimpleForm>
    </Create>
    )
