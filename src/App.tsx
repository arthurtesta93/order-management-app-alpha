import {
  Admin,
  Resource,
} from "react-admin";

import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

import { ItemList } from "./pages/item/ItemList";
import { ItemEdit } from "./pages/item/ItemEdit";
import { ItemShow } from "./pages/item/ItemShow";

import { OrganizationsList } from "./pages/organizations/OrganizationsList";
import { OrganizationsShow } from "./pages/organizations/OrganizationsShow";
import { OrganizationsEdit } from "./pages/organizations/OrganizationsEdit"

import { FacilityList } from "./pages/facilities/FacilitiesList";
import { FacilityEdit } from "./pages/facilities/FacilitiesEdit";
import { FacilityShow } from "./pages/facilities/FacilitiesShow";

import OrganizationsIcon from "@mui/icons-material/CorporateFare";
import FactoryIcon from '@mui/icons-material/Factory';
import UserIcon from '@mui/icons-material/Contacts';

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="organizations"
      list={OrganizationsList}
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
      icon={UserIcon}
    />
  </Admin>
);
