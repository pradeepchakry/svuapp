import React, { useState } from "react";
import { useBetween } from "use-between";

const UserFormState = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState(false);



  return {
    username, setUsername, phone, setPhone, student, setStudent
  };
};

export default UserFormState