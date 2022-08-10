export type Address = {
  street: string[];
  city: string;
  country: string;
  postalCode: string;
};

export type User = {
  id: string;
  firstName: string;
  email: string;
  lastName: string;
  dob: string;
  address: Address;
};
