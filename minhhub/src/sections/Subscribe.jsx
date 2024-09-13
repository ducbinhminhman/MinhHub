import { FunctionComponent } from 'react';

const MailingListSection: FunctionComponent = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-32 px-16 text-center text-font-color font-montserrat">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Join My Mailing List</h2>
        <p className="text-lg text-font-color1">
          Sign up to receive inspiration, product updates, and special offers from Minh.
        </p>

        {/* Mailing List Form */}
        <form className="flex items-center w-full max-w-lg gap-4">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="flex-1 px-4 py-3 border border-primary-color rounded-lg text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-color text-white rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default MailingListSection;
