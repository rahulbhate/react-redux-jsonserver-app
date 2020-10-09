const getCustomers = (customers, { text, sortBy }) => {
  return  customers.length === 0
    ? []
    : customers
        .map(customer => {
          return {
            ...customer,
          };
        })
        .filter(customer => {
          const textMatch =
            customer.firstName.toLowerCase().includes(text.toLowerCase()) ||
            customer.lastName.toLowerCase().includes(text.toLowerCase());
          return textMatch;
        })
        .sort((cust1, cust2) => {
          if (sortBy === "firstname") {
            return cust1.firstName.localeCompare(cust2.firstName);
          } else if (sortBy === "lastname") {
            return cust1.lastName.localeCompare(cust2.lastName);
          }
        });
};
export default getCustomers;
