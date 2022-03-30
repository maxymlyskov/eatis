import React from "react";
import { View } from "react-native";

import { Formik } from "formik";
import colors from "../../config/colors";

function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  styles,
}) {
  return (
    <View
      style={[
        {
          flex: 1,
        },
        styles,
      ]}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}

export default AppForm;
