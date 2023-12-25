import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import FormSection from "../components/FormSection";

export default function Register() {
  return (
    <div className="formAndTop5">
      <RoutesMenu
        availableRoutes={["/", "/nutrition", "/ranking", `/products/`]}
      />
      <section>
        <FormSection />
      </section>
    </div>
  );
}
