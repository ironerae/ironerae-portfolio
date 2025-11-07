export default function Contact() {
  return (
    <div className="flex gap-16 flex-wrap mt-24" id="contact">
      <div className="w-96">
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <p className="mt-4">
          If you'd like to get in touch, feel free to reach out for
          collaborations or just a friendly hello!
        </p>
      </div>
      <form
        className="flex flex-col flex-1"
        action="https://formsubmit.co/ironerae@gmail.com"
        method="POST"
      >
        <legend className="fieldset-legend">Name:</legend>
        <input
          type="text"
          required
          className="input w-full"
          name="name"
          placeholder="Type your name here"
        />

        <legend className="fieldset-legend">Email:</legend>
        <input
          type="email"
          name="email"
          required
          className="input w-full"
          placeholder="Type your email here"
        />

        <legend className="fieldset-legend">Message</legend>
        <textarea
          name="message"
          required
          minLength={50}
          className="textarea h-24 w-full"
          placeholder="Type your message here"
        ></textarea>

        <button
          type="submit"
          className="btn mt-6 btn-neutral border-2 border-secondary rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
