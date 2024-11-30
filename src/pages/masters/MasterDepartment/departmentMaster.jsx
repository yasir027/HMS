import React from "react";
import departmentMasterSchema from "./departmentMasterSchema.json";
import DynamicForm from "../../../components/dynamicForm";

const DepartmentMaster = () => {
  const handleFormSubmit = (formData) => {
    console.log("Submitted Data:", formData);
    // Handle the form submission logic here
  };

  return (
    <div>
      <DynamicForm formSchema={departmentMasterSchema} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default DepartmentMaster;
