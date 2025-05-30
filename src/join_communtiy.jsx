export default function GrowvyPitch(props) {
  return (
    <div className=" text-center p-6 max-w-4xl mx-auto">
      <h2 className="joinh2 text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        {props.pitch.h2}
      </h2>
      <p className="growvy-pitch-quote text-lg text-gray-600 italic mb-6">
        {`"${props.pitch.p}"`}
      </p>
      <button className="growvy-pitch-highlight startbtn joinbtn bg-green-500 transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-125 text-white font-medium py-2 px-4 rounded-full  w-40 text-lg">
        {props.pitch.button}
      </button>
    </div>
  );
}