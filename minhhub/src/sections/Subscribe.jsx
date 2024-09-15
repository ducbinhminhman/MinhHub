import { FunctionComponent } from 'react';

const MailingListSection: FunctionComponent = () => {
  return (
    <section className="w-full h-screen bg-white flex flex-col items-center justify-center py-24 px-6 md:px-16 text-center text-font-color font-montserrat">
      <div className="flex flex-col items-center justify-center gap-4 max-w-2xl">
        <h2 className="text-2xl md:text-[28px] font-bold">Join My Mailing List</h2>
        <p className="text-lg md:text-xl text-font-color1">
          Sign up to receive inspiration, product updates, and special offers from Minh.
        </p>

        {/* Container for centering form */}
        <div className="w-full flex justify-center items-center mt-6">
          <form className="flex flex-col md:flex-row items-center justify-center w-full max-w-lg gap-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              aria-label="Email Address"
              className="flex-1 w-full px-4 py-3 border border-primary-color rounded-lg text-gray-600 focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color"
              required
            />
            <button
              type="submit"
              aria-label="Submit"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingListSection;
