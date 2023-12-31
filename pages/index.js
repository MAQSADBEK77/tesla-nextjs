import CarTemplate from "../components/CarTemplate.js";
import NavBar from "../components/NavBar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla</title>
        <meta
          name="description"
          content="Tesla, Usmonov Maqsadbek, Projects Usmonov Maqsadbek"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/teslaLogo.png" />
      </Head>
      <NavBar />
      <CarTemplate
        carName="Model Y"
        carCost="Lease starting at $399/mo*"
        carDescription=""
        demoTo="#"
        orderTo="#"
        id="1"
      />
      <CarTemplate
        carName="Model 3"
        carCost="Lease starting at $329/mo*"
        carDescription=""
        demoTo="#"
        orderTo="#"
        id="2"
      />
      <CarTemplate
        carName="Model X"
        carCost="From $68,590*"
        carDescription="After Federal Tax Credit & Est. Gas Savings"
        demoTo="#"
        orderTo="#"
        id="3"
      />
      <CarTemplate
        carName="Model S"
        carCost="From $71,090*"
        carDescription="After Est. Gas Savings"
        demoTo="#"
        orderTo="#"
        id="4"
      />
      <CarTemplate
        carName="Solar Panels"
        carCost="Powerwall Optional"
        carDescription="Retrofit panels for your existing roof"
        demoTo="#"
        orderTo="#"
        id="5"
      />
      <CarTemplate
        carName="Solar Roof"
        carCost=" Solar shingles, or solar roof tiles"
        carDescription="Produce Clean Energy From Your Roof"
        demoTo="#"
        orderTo="#"
        id="6"
      />
    </>
  );
}
