export interface IMenuLayout {
  label: string;
  route: string;
  translate?: boolean;
  managerOnly?: boolean;
  expenseAdminOnly?: boolean;
  purchaseAdminOnly?: boolean;
}
