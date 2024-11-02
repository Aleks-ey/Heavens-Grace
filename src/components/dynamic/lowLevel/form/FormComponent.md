<FormComponent
  fields={[
    { name: "username", props: { type: "text", placeholder: "Username" } },
    { name: "password", props: { type: "password", placeholder: "Password" } },
  ]}
  onSubmit={(e) => {
    e.preventDefault();
    console.log("Form submitted");
  }}
  style={{ className: "flex flex-col gap-4" }}
/>
