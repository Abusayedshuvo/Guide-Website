import CountUp, { useCountUp } from "react-countup";

const Counter = () => {
  const counters = [
    { id: 1, label: "Happy Travelers", count: 5000 },
    { id: 2, label: "Countries Explored", count: 30 },
    { id: 3, label: "Adventures Offered", count: 100 },
    { id: 4, label: "Years of Experience", count: 15 },
  ];
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
  });
  return (
    <div className="bg-primary/10 my-14 py-20">
      <div className="container mx-auto lg:px-20 px-4 grid lg:grid-cols-4 gap-6">
        {counters.map((count) => (
          <div
            className="bg-primary text-white text-center rounded-lg p-10"
            key={count.id}
          >
            <CountUp
              className="text-4xl font-bold"
              end={count.count}
              enableScrollSpy
            />
            <p className="text-xl font-semibold mt-4">{count.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
