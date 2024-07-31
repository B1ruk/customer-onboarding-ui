export interface UserCredential {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  role: string;
}

export interface Application {
  id: string | null;
  purpose: string;
  companyName: string;
  entityType: string;
  businessActivity: string;
  countryOfIncorporation: string;
  registrationNumber: string;
  dateOfIncorporation: string;
  directorName: string;
  passportNumber: string;
  applicantName: string;
  email: string;
  status: string | null;
}

