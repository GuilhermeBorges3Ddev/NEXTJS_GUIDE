import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import FormSection from "../components/FormSection";
import GenericWrapper from "../components/GenericWrapper";

export default function Register() {
  return (
    <GenericWrapper>
      <RoutesMenu
        availableRoutes={["/", "/nutrition", "/ranking", `/products/`]}
      />
      <section>
        <FormSection />
      </section>
    </GenericWrapper>
  );
}
