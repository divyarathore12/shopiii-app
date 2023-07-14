import React from "react";
import Layout from "./../components/layout/layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="mt-6">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from (Store URL).

</p>
<h5>WHAT PERSONAL INFORMATION WE COLLECT

</h5>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.

</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;