const NewsLetter = () => {
  return (
    <div className="bg-primary py-20">
      <div className="m-container max-w-5xl text-center text-white space-y-6">
        <p className="text-4xl font-bold">Stay Informed with Our Newsletter</p>
        <p>
          Subscribe to our newsletter and be the first to receive updates on
          exclusive travel deals, new destinations, and exciting adventures.
          Join our community of explorers and embark on a journey of discovery.
          Sign up now to stay connected with the latest in travel experiences
          and local insights.
        </p>
        <div className="flex text-center lg:w-4/5 mx-auto">
          <input
            name="search"
            type="email"
            placeholder="Your Email"
            className="p-4 w-full"
          />
          <button
            type="submit"
            className="btn bg-black rounded-none lg:px-20 text-white border-4 border-black"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
