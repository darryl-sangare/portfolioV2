const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  pb-20 p-6 relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📩 Contactez-moi</h2>
      <p className="text-gray-600 mb-8 text-center">
        Remplissez le formulaire ci-dessous pour m'envoyer un message !
      </p>

      <form
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const name = (document.getElementById("name") as HTMLInputElement).value;
          const email = (document.getElementById("email") as HTMLInputElement).value;
          const message = (document.getElementById("message") as HTMLTextAreaElement).value;
          
          const mailtoLink = `mailto:darryl.sangare@gmail.com?subject=Message de ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe: ${email}`;
          window.location.href = mailtoLink;
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          ✉️ Envoyer
        </button>
      </form>

      {/* Copyright en bas à droite */}
      <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
        © 2025 Darryl Sangaré | Tous droits réservés
      </div>
    </div>
  );
};

export default ContactPage;
