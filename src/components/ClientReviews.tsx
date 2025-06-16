import Image from "next/image";

const clients = [
  {
    name: "Celia Almeda",
    title: "Secretary",
    image: "/client1.png",
    review:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    name: "Nat Reynolds",
    title: "Chief Accountant",
    image: "/client2.png",
    review:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    name: "Bob Roberts",
    title: "Sales Manager",
    image: "/client3.png",
    review:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
];

export default function ClientReviews() {
  return (
    <section className="bg-blue-400 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        What do our users say?
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 py-8 text-center space-y-4"
          >
            <p className="text-gray-600 text-sm">{client.review}</p>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-28 h-36 overflow-hidden rounded-lg">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={112}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800">{client.name}</h3>
              <p className="text-gray-500 text-sm">{client.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
