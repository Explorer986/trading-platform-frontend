import { List, Datagrid, TextField, NumberField } from "react-admin";

export const WatchlistList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="stockName" />
      <TextField source="stockTicker" />
      <NumberField source="price" />
      <NumberField source="marketCapInBillions" label="Market Cap (B)" />
      <NumberField source="annualDividendYield" label="Dividend %" />
    </Datagrid>
  </List>
);
