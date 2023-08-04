function Schedule() {
  return (
    <div className="flex-col md:my-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 sm:text-4xl">
          Schedule
        </h2>
        <p className="mt-4 mx-4 text-gray-600 sm:text-xl">
          Our conference brings together visionaries and experts from the AI and
          technology industry who have made significant contributions in using
          AI to build products that reach billions of people. Get ready to be
          inspired by their insights, experiences, and innovative ideas
        </p>
      </div>

      <div className="mt-8 md:mt-12 text-blue-800 max-w-4xl mx-auto">
        <dl className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-gray-800 mt-2">
              IIIT Delhi, Okhla Phase-3
            </dt>
            <dd className="font-extrabold text-blue-800 text-xl md:text-2xl">
              Where
            </dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-gray-800 mt-2">
              Saturday, 15 August, 2023 <br/>
              9:00 AM to 3:30 PM
            </dt>
            <dd className="font-extrabold text-blue-800 text-xl md:text-2xl">
              When
            </dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-gray-800 mt-2">
              <a href="#" className="italic">View on Google Maps</a>
            </dt>
            <dd className="font-extrabold text-blue-800 text-xl md:text-2xl">
              How
            </dd>
          </div>
        </dl>
      </div>

      <dl className="max-w-4xl mx-8 md:mx-auto my-12 divide-y divide-gray-100 text-lg">
      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">9:00 AM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Registration & Networking</p>
          </dd>
        </div>
        
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">9:30 AM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Welcome Session by Dr. Olivia Chen</p>
            <p className="text-base">AI for All: Building Inclusive Technology for Billions</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">10:00 AM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Workshop Session 1: Emily Johnson</p>
            <p className="text-base">Designing User-Centric AI Products for Global Impact</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">11:15 AM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Panel Discussion: "AI Ethics and the Road to a Responsible Future"</p>
            <p className="text-base">Panelists: Dr. Sarah Patel, Prof. Michael Lee, Alex Johnson</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">12:00 PM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Spotlight Talk: John Wong</p>
            <p className="text-base">Scalable AI: Reaching Billions of Users in Real-Time</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">1:30 PM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Workshop Session 2: Dr. Max Chen</p>
            <p className="text-base">Harnessing the Power of Big Data in AI Applications</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">2:15 PM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Fireside Chat: Dr. Maria Ramirez and Prof. Michael Lee</p>
            <p className="text-base">Democratizing AI Education: Empowering the Next Generation</p>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-2xl text-blue-800">3:15 PM</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <p className="text-blue-800 font-medium">Closing Remarks & Thank You</p>
          </dd>
        </div>

      </dl>
    </div>
  );
}

export default Schedule;
