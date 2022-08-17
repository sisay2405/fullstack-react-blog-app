import { Key } from "react";

export type PostResult = {
    _id: string;
    title: string;
    text: string;
    category: string;
    author?: string;
    date?: string;
  };
  export type CategoryResult = {
    _id:string;
    categoryType:string;
  };
  export type loginResult = {
    _id:string;
    name:string;
    email:string;
    password:string;
  };
  