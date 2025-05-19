import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";


export default function Envprodec() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Environmental Product Declarations (EPDs) for Data Center
          Sustainability
        </h1>
        <h2 className="text-2xl font-semibold mb-6">What are EPDs?</h2>
        <p className="font-light text-[15px] mb-8">
          Environmental Product Declarations (EPDs) are standardized documents
          that provide transparent and comparable information about the
          life-cycle environmental impact of products. For data centers, EPDs
          can cover various components, from servers and networking equipment to
          cooling systems and building materials. <br />
          <br />
          EPDs are based on Life Cycle Assessments (LCAs) and provide quantified
          environmental information on the entire lifecycle of a product, from
          raw material extraction to end-of-life disposal or recycling.
        </p>

        <h2 className="text-2xl mt-10 font-semibold mb-4">
          Why EPDs Matter for Data Centers
        </h2>
        <ul className="list-disc font-light pl-6 text-zinc-300 leading-relaxed space-y-2 mb-8">
          <li>
            Transparency: EPDs provide clear, verified environmental impact
            data.
          </li>
          <li>
            Informed Decision-Making: Helps in choosing more sustainable
            products and technologies.
          </li>
          <li>
            Regulatory Compliance: Supports meeting environmental regulations
            and standards.
          </li>
          <li>
            Green Certifications: Facilitates achieving certifications like LEED
            or BREEAM.
          </li>
          <li>
            Competitive Advantage: Demonstrates commitment to sustainability to
            clients and stakeholders.
          </li>
        </ul>

        <h2 className="text-2xl mt-10 font-semibold mb-4">
          EPD Implementation in Data Centers
        </h2>
        <div className="flex flex-col md:flex-row gap-3 mb-5">
          <div className="flex-1">
            <Image
              src="/images/05EPDs.webp"
              alt="Life cycle EPD"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover p-3"
            />
            <p className="font-light text-sm mt-1 mb-8">
              Figure 1: Life cycle stages covered in an EPD.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/06RegulationEPDs.webp"
              alt="Environmental Impact EPD"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover p-3 "
            />
            <p className="font-light text-sm mt-1 mb-8">
              Figure 2: Environmental impact categories typically included in
              EPDs.
            </p>
          </div>
        </div>

        <h2 className="text-2xl mt-3 font-semibold mb-4">
          How CentralAxis Supports EPD Implementation
        </h2>
        <p className="font-light mb-6">
          CentralAxis offers comprehensive solutions to help data centers
          implement and leverage EPDs:
        </p>
        <ul className="list-disc font-light pl-6 text-zinc-300 leading-relaxed space-y-2 mb-8">
          <li>
            EPD database integration for easy access to product environmental
            data
          </li>
          <li>
            LCA tools for conducting assessments on data center components
          </li>
          <li>Reporting features to generate EPD-compliant documentation</li>
          <li>
            Analysis tools to compare products based on their environmental
            impact
          </li>
          <li>Integration with green building certification processes</li>
        </ul>

        <VideoBanner
                  videoSrc="/"
                  heading={
                    <>
                      <p className="text-white text-2xl mb-3">
                       Embrace Sustainability with EPD-Driven Insights
                      </p>
                    </>
                  }
                  subtext={
                    <p className="max-w-3xl pb-2">
                     Ready to enhance your data center's environmental performance? Discover how CentralAxis can help you leverage EPDs for sustainable growth and operational excellence.
                    </p>
                  }
                  position="top-left"
                  buttonContent={
                    <a
                      href="https://calendly.com/margarita-centralaxis/30min"
                      className="inline-block px-6 py-3 font-light text-white  border border-black"
                    >
                      Schedule a Demo
                    </a>
                  }
                />
      </div>
    </>
  );
}
