import React from "react";
import { View } from 'react-native';

import { Formik } from "formik";
import colors from "../../config/colors";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <View style={{
      flex: 1,
      borderColor: colors.grey,
      borderWidth: 1,
      borderRadius: 999
    }}>
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
