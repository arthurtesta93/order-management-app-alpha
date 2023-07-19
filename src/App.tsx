import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
  defaultDarkTheme,
} from "react-admin";

import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

import { ItemList } from "./pages/item/ItemList";
import { ItemEdit } from "./pages/item/ItemEdit";
import { ItemShow } from "./pages/item/ItemShow";

import { OrganizationsList } from "./pages/organizations/OrganizationsList";
import { OrganizationsShow } from "./pages/organizations/OrganizationsShow";
import { OrganizationsEdit } from "./pages/organizations/OrganizationsEdit";
import { OrganizationsCreate } from "./pages/organizations/OrganizationsCreate";

import { FacilityList } from "./pages/facilities/FacilitiesList";
import { FacilityEdit } from "./pages/facilities/FacilitiesEdit";
import { FacilityShow } from "./pages/facilities/FacilitiesShow";

import OrganizationsIcon from "@mui/icons-material/CorporateFare";
import FactoryIcon from '@mui/icons-material/Factory';
import ItemIcon from '@mui/icons-material/Inventory';
import Dashboard from "./dashboard/Dashboard";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} darkTheme={defaultDarkTheme}>
      <Resource
        name="organizations"
        list={OrganizationsList}
        create={OrganizationsCreate}
        edit={OrganizationsEdit}
        show={OrganizationsShow}
        icon={OrganizationsIcon}
      />
      <Resource
        name="facilities"
        list={FacilityList}
        edit={FacilityEdit}
        show={FacilityShow}
        icon={FactoryIcon}
      />
      <Resource
        name="items"
        list={ItemList}
        edit={ItemEdit}
        show={ItemShow}
        icon={ItemIcon}
      />
      <Resource
        name="purchase_order"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={ContentPasteIcon}
      />
      <Resource
        name="shipping_order"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={ContentPasteIcon}
      />
      <Resource
        name="item_instance"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={ContentPasteIcon}
      />
    </Admin>
);
