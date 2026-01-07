import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create
} from "react-admin";

/* LIST */
export const AccountList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="userId" label="User ID" />
      <TextField source="username" />
      <EmailField source="email" />
      <NumberField source="balance" />
      <TextField source="isActive" label="Active" />
    </Datagrid>
  </List>
);

/* EDIT */
export const AccountEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <NumberInput source="balance" />
    </SimpleForm>
  </Edit>
);

/* CREATE */
export const AccountCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <NumberInput source="balance" />
    </SimpleForm>
  </Create>
);
