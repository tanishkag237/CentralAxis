import Badge from "./Badge";

export default function FAQ(){
    const data = [
    {
      question: "Are these solutions applicable to me if I am operating a co-location?",
      answer: "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
    },
    {
      question: "How does pricing work?",
      answer: "Depending on your requirements, we offer flexible pricing models.",
    },
    {
      question: "Do you provide ongoing support and maintenance for your solutions?",
      answer: "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
    },
    {
      question: "How do I get started?",
      answer: "Set up a demo and we'll guide you through our offerings and start a trial!",
    },
  ];

return(
    <>
    <div className="text-center  p-14 justify-start md:w-auto">
        <div className="flex justify-center mb-2">
          <Badge text={"FAQs"} />
        </div>
        <h1 className="text-white font-inter pb-2 text-4xl">Frequently asked questions</h1>
       <p className="text-zinc-400 font-inter font-thin text-lg pl-2">
          Find answers to common questions about our solutions.
        </p>

    <section className="w-full px-6 py-12 text-white text-start ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className=" rounded-xl p-5 shadow-sm font-inter"
          >
            <h2 className="text-lg  font-normal mb-2">{item.question}</h2>
            <p className="text-zinc-500 font-normal text-md">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
);
}