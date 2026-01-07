import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  NumberInput
} from "react-admin";

export const OrderList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="orderId" label="Order ID" />
      <TextField source="stockTicker" />
      <TextField source="orderType" />
      <NumberField source="noOfShares" label="Shares" />
      <NumberField source="cost" />
      <DateField source="orderDate" />
    </Datagrid>
  </List>
);

export const OrderCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="stockTicker" />
      <TextInput source="orderType" />
      <NumberInput source="noOfShares" />
    </SimpleForm>
  </Create>
);
