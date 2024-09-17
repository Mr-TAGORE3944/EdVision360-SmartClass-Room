import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  // Safely handle time zone formatting
  let usTime;
  let istTime;
  try {
    // US Time (New York or any other US timezone)
    usTime = now.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York', // Adjust to the US timezone you need
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // Indian Standard Time (IST)
    istTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch (error) {
    console.error('Error formatting time:', error);
    usTime = 'N/A';
    istTime = 'N/A';
  }

  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now,
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM US Time / {istTime} IST
          </h2>
          <h6 className="hidden">{usTime}</h6>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{istTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
