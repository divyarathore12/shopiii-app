import React from "react";
import Layout from "./../components/layout/layout";

const About = () => {
  return (
    <Layout title={"About us - Shopiii app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Hello and welcome to Shopiii, the place to find the best Products for every taste and occasion.
           We thoroughly check the quality of our goods, working only with reliable suppliers
            so that you only receive the best quality product.


          </p>
          <p className="text-justify mt-2">
          We at Shopiii believe in high quality and exceptional customer service. 
          But most importantly, we believe shopping is a right, not a luxury,
           so we strive to deliver the best products at the most affordable prices,
            and ship them to you regardless of where you are located.

</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;