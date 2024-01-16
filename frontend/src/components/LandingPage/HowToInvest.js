import InvestCard from "../InvestCard";

export default function HowToInvest({ position }) {

  return (
    <div>
      <h1 className="font-curvy text-center text-8xl  py-7 font-semi-bold">How to invest?</h1>
      <InvestCard position="right" content="Reserve solar you need to offset your monthly power bill from an active project. You get credits for the power produced from your reserved solar panels." image="/invest1.svg" />
      <InvestCard position="left" content="Reserve solar you need to offset your monthly power bill from an active project. You get credits for the power produced from your reserved solar panels." image="/invest2.svg" style="mt-[-80px]"/>
      <InvestCard position="right" content="Reserve solar you need to offset your monthly power bill from an active project. You get credits for the power produced from your reserved solar panels." image="/invest3.svg" />
      <InvestCard position="left" content="Reserve solar you need to offset your monthly power bill from an active project. You get credits for the power produced from your reserved solar panels." image="/invest4.svg" />

    </div>
  );
}
