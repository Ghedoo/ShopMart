export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  rePassword: string; // بدل passwordConfirm
  phone: string;
}


  export interface SuccessRegisterResponse {
    status: "success";
    message: string;
    data: {
      _id: string;
      name: string;
      email: string;
    };
  }

  export interface FailedRegisterResponse {
    status: "fail";
    message: string;
  }
