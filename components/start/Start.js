import Link from 'next/link';

const Start = () => {
  console.log("Start Component is rendering");

  return (
    <div>
      <Link href="/game">Start</Link>
    </div>
  )
};

export default Start;
