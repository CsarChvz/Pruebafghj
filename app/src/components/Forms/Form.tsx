import { Formik, Field } from "formik";

// Poner los tipos de los parametrso
function FormFormik({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default FormFormik;
