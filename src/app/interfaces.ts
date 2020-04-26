export interface AlertMessage {
  type: string,
  message: string
}

export interface NewsData {
  title: string,
  author: string,
  date: string,
  img: string,
  content: string,
  url: string
}

export interface profileJson {
  first_name: string,
  last_name: string,
  date_birth: string,
  address: string,
  email: string,
  phone: string,
  photo: string,
  short_description: string
}

export class Profile {
  firstName: string;
  lastName: string;
  dateBirth: string;
  address: string;
  email: string;
  phone: number;
  photo: string;
  shortDescription: string;

  constructor(
    first_name,
    last_name,
    date_birth,
    address,
    email,
    phone,
    photo,
    short_description
  ) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.dateBirth = date_birth;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.photo = photo;
    this.shortDescription = short_description;
  }

  static fromJson(json: profileJson) {

   return new Profile(
     json.first_name,
     json.last_name,
     json.date_birth,
     json.address,
     json.email,
     json.phone,
     json.photo,
     json.short_description
   )
  }
}

export interface UserAuth {
  name: string,
  password: number
}

