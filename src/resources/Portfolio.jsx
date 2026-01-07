import { List, Datagrid, TextField, NumberField } from "react-admin";

export const PortfolioList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="stockName" />
      <TextField source="stockTicker" />
      <NumberField source="price" />
      <NumberField source="noOfShares" />
      <NumberField source="pnlInDollars" label="P&L ($)" />
      <NumberField source="pnlInPercentage" label="P&L (%)" />
    </Datagrid>
  </List>
);
