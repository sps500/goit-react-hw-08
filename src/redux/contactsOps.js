import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66680038f53957909ff6182a.mockapi.io/Contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
