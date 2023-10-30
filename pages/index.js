import CarTemplate from "../components/CarTemplate.js";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Model1 from "../public/images/model-y.jpg";
import Model2 from "../public/images/model-3.jpg";
import Model3 from "../public/images/model-x.jpg";
import Model4 from "../public/images/model-s.jpg";
import Model5 from "../public/images/solar-panel.jpg";
import Model6 from "../public/images/solar-roof.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/teslaLogo.png" />
      </Head>
      <NavBar />
      <CarTemplate
        imgSrc={Model1}
        carName="Model Y"
        carCost="Lease starting at $399/mo*"
        carDescription=""
        demoTo="#"
        orderTo="#"
      />
      <CarTemplate
        imgSrc={Model2}
        carName="Model 3"
        carCost="Lease starting at $329/mo*"
        carDescription=""
        demoTo="#"
        orderTo="#"
      />
      <CarTemplate
        imgSrc={Model3}
        carName="Model X"
        carCost="From $68,590*"
        carDescription="After Federal Tax Credit & Est. Gas Savings"
        demoTo="#"
        orderTo="#"
      />
      <CarTemplate
        imgSrc={Model4}
        carName="Model S"
        carCost="From $71,090*"
        carDescription="After Est. Gas Savings"
        demoTo="#"
        orderTo="#"
      />
      <CarTemplate
        imgSrc={Model5}
        carName="Solar Panels"
        carCost="Powerwall Optional"
        carDescription="Retrofit panels for your existing roof"
        demoTo="#"
        orderTo="#"
      />
      <CarTemplate
        imgSrc={Model6}
        carName="Solar Roof"
        carCost=" Solar shingles, or solar roof tiles"
        carDescription="Produce Clean Energy From Your Roof"
        demoTo="#"
        orderTo="#"
      />
    </>
  );
}
