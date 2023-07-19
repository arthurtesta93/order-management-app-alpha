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

import { ItemList } from "./pages/core/item/ItemList";
import { ItemEdit } from "./pages/core/item/ItemEdit";
import { ItemShow } from "./pages/core/item/ItemShow";

import { OrganizationsList } from "./pages/core/organizations/OrganizationsList";
import { OrganizationsShow } from "./pages/core/organizations/OrganizationsShow";
import { OrganizationsEdit } from "./pages/core/organizations/OrganizationsEdit";
import { OrganizationsCreate } from "./pages/core/organizations/OrganizationsCreate";

import { FacilityList } from "./pages/core/facilities/FacilitiesList";
import { FacilityEdit } from "./pages/core/facilities/FacilitiesEdit";
import { FacilityShow } from "./pages/core/facilities/FacilitiesShow";

import { PurchaseOrderList } from "./pages/order_management/purchase_order/PurchaseOrderList";

import { ShippingOrderList } from "./pages/order_management/shipping_order/ShippingOrderList";

import { ItemInstanceList } from "./pages/order_management/item_instance/Item_Instance";

import OrganizationsIcon from "@mui/icons-material/CorporateFare";
import FactoryIcon from '@mui/icons-material/Factory';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Dashboard from "./dashboard/Dashboard";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';


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
        icon={BuildCircleIcon}
      />
      <Resource
        name="purchase_order"
        list={PurchaseOrderList}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={ContentPasteIcon}
      />
      <Resource
        name="shipping_order"
        list={ShippingOrderList}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={LocalShippingIcon}
      />
      <Resource
        name="item_instance"
        list={ItemInstanceList}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={BuildIcon}
      />
    </Admin>
);
