interface User {
  id: number;
  type: string;
  name: string;
  address: string;
  phone_number: string;
  gender: Gender;
  batchs_handled: number;
  yield_acquired: number;
  greenhouse_locations: Array<any>;
  years_experience: number;
  education_qualification: string;
  inventory_management_certification: boolean;
}
