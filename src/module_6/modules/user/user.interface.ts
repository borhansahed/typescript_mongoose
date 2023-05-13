export interface IUser {
  name: {
    fastName: string;
    lastName: string;
  };
  password: string;
  role: "student";
  dateOfBirth?: string;
  gender: "male" | "female";
  email: string;
}
